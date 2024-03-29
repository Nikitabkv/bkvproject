import WelcomeCards from "../../../widgets/WelcomeCards"
import SearchWidget from "../../../widgets/SearchWidget"

export const MainPage = () => {

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20}}>
      <SearchWidget />
      <WelcomeCards />
    </div>
  )
}