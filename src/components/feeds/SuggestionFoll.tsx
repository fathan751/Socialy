import UserRecom from "./followSuggest/UserRecom"

const SuggestionFoll = () => {

  return (
    <aside className="px-3 py-4 flex-1 shadow size-fit flex flex-col gap-5 max-w-75">
        <h2 className="text-gray-600 font-semibold">Suggestion for you</h2>
        <UserRecom/>
        <UserRecom/>
        <UserRecom/>
    </aside>
  )
}

export default SuggestionFoll