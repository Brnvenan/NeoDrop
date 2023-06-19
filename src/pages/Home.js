import Use from "../components/Use"
import Banner from "../components/Banner"
import Produtos from "../components/Produtos"

function Home() {
    return (
        <div className="bg-jj">
            <Use/>
            <Produtos/>
            <Banner/>
        </div>
    )
}

export default Home