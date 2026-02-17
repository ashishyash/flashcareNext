// src/lib/fileManager.ts
import fs from 'node:fs';
import path from 'node:path';

/**
 * Get the data directory path
 */
const getDataDir = (): string => {
  return path.join(process.cwd(), 'data');
};

/**
 * Get full file path for a JSON file
 */
const getFilePath = (filename: string): string => {
  return path.join(getDataDir(), `${filename}.json`);
};

/**
 * Read all data from a JSON file
 */
export const readFile = async (filename: string): Promise<any[]> => {
  try {
    const filePath = getFilePath(filename);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      return [];
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return [];
  }
};

/**
 * Write data to a JSON file
 */
export const writeFile = async (filename: string, data: any): Promise<boolean> => {
  try {
    const filePath = getFilePath(filename);
    
    // Ensure directory exists
    const dir = getDataDir();
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    return false;
  }
};

/**
 * Get all items from a file
 */
export const getAll = async (filename: string): Promise<any[]> => {
  return await readFile(filename);
};

/**
 * Get a single item by ID
 */
export const getById = async (filename: string, id: number): Promise<any | null> => {
  try {
    const data = await readFile(filename);
    return data.find((item: any) => item.id === id) || null;
  } catch (error) {
    console.error(`Error reading item from ${filename}:`, error);
    return null;
  }
};

/**
 * Create a new item
 * Automatically generates ID
 */
export const create = async (filename: string, item: any): Promise<any | null> => {
  try {
    const data = await readFile(filename);
    
    // Generate new ID
    const newId = data.length > 0 
      ? Math.max(...data.map((d: any) => d.id || 0)) + 1 
      : 1;

    const newItem = {
      ...item,
      id: newId,
      createdAt: new Date().toISOString()
    };

    data.push(newItem);
    const success = await writeFile(filename, data);
    
    return success ? newItem : null;
  } catch (error) {
    console.error(`Error creating item in ${filename}:`, error);
    return null;
  }
};

/**
 * Update an existing item by ID
 */
export const update = async (
  filename: string,
  id: number,
  updates: any
): Promise<any | null> => {
  try {
    const data = await readFile(filename);
    const index = data.findIndex((item: any) => item.id === id);

    if (index === -1) {
      console.warn(`Item with ID ${id} not found in ${filename}`);
      return null;
    }

    const updatedItem = {
      ...data[index],
      ...updates,
      id, // Ensure ID doesn't change
      updatedAt: new Date().toISOString()
    };

    data[index] = updatedItem;
    const success = await writeFile(filename, data);

    return success ? updatedItem : null;
  } catch (error) {
    console.error(`Error updating item in ${filename}:`, error);
    return null;
  }
};

/**
 * Delete an item by ID
 */
export const deleteById = async (filename: string, id: number): Promise<boolean> => {
  try {
    const data = await readFile(filename);
    const filtered = data.filter((item: any) => item.id !== id);

    if (filtered.length === data.length) {
      console.warn(`Item with ID ${id} not found in ${filename}`);
      return false;
    }

    return await writeFile(filename, filtered);
  } catch (error) {
    console.error(`Error deleting item from ${filename}:`, error);
    return false;
  }
};

/**
 * Filter items by property
 */
export const filterBy = async (
  filename: string,
  property: string,
  value: any
): Promise<any[]> => {
  try {
    const data = await readFile(filename);
    return data.filter((item: any) => item[property] === value);
  } catch (error) {
    console.error(`Error filtering ${filename}:`, error);
    return [];
  }
};

/**
 * Search items by text in property
 */
export const searchBy = async (
  filename: string,
  property: string,
  searchText: string
): Promise<any[]> => {
  try {
    const data = await readFile(filename);
    const lowerText = searchText.toLowerCase();
    return data.filter((item: any) =>
      item[property]?.toString().toLowerCase().includes(lowerText)
    );
  } catch (error) {
    console.error(`Error searching in ${filename}:`, error);
    return [];
  }
};

/**
 * Get total count of items
 */
export const count = async (filename: string): Promise<number> => {
  try {
    const data = await readFile(filename);
    return data.length;
  } catch (error) {
    console.error(`Error counting items in ${filename}:`, error);
    return 0;
  }
};

/**
 * Batch update multiple items
 */
export const batchUpdate = async (
  filename: string,
  updates: Array<{ id: number; changes: any }>
): Promise<boolean> => {
  try {
    let data = await readFile(filename);

    updates.forEach(({ id, changes }) => {
      const index = data.findIndex((item: any) => item.id === id);
      if (index !== -1) {
        data[index] = {
          ...data[index],
          ...changes,
          updatedAt: new Date().toISOString()
        };
      }
    });

    return await writeFile(filename, data);
  } catch (error) {
    console.error(`Error batch updating ${filename}:`, error);
    return false;
  }
};

/**
 * Clear all items (create empty array)
 */
export const clear = async (filename: string): Promise<boolean> => {
  try {
    return await writeFile(filename, []);
  } catch (error) {
    console.error(`Error clearing ${filename}:`, error);
    return false;
  }
};

/**
 * Get statistics about a file
 */
export const getStats = async (filename: string): Promise<any> => {
  try {
    const data = await readFile(filename);
    const filePath = getFilePath(filename);
    const stats = fs.statSync(filePath);

    return {
      filename,
      count: data.length,
      size: stats.size,
      created: stats.birthtime,
      modified: stats.mtime
    };
  } catch (error) {
    console.error(`Error getting stats for ${filename}:`, error);
    return null;
  }
};