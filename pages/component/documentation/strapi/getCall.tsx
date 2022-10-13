import Header from "../../header";
export default function Home() {
    const callAPI = async () => {
        try {
            const res = await fetch(
                `http://localhost:1337/api/tests`
            );
            const data = await res.json();

            for (let key in data) {
                if (data[key].length) {
                    for (let i = 0; i <= data[key].length; i++) {
                        console.log(data[key][i].id);
                    }
                } else {

                }
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="">
            <Header />
            <div className="">
                <main className="">
                    <button onClick={callAPI}>Make API Call</button>
                </main>
            </div>
        </div>
    );
}