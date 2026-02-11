import { SearchWrapper } from "./search-wrapper";
import nursesData  from "@/data/nurses.json";
import { Nurse } from "./search.constant";
export const NurseSearchPage = () => {
  return (
   <div>
    <SearchWrapper  nurses={nursesData as Nurse[]}/>
   </div>
  )
}
export default NurseSearchPage;