import RequestCards from "../components/RequestCards";


export default function MyRequests() {
    return (
        <div className="flex flex-col justify-center gap-3 mx-auto">
            <h1 className="text-2xl font-bold mt-2">Reservation History</h1>
            <RequestCards />
        </div >
      );
}