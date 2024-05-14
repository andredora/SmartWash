import HomeCards from "../components/HomeCards";
import SearchBar from "../components/SearchBar";
export default function Home() {

    return (
        <div className="flex flex-col justify-center gap-12 pb-16 mx-auto">
            <SearchBar />
            <HomeCards />
        </div >
    );
}
