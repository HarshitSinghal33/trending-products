import PinCode from "./components/PinCode"
import MainSlider from "./components/MainSlider"
import { ProductSlider } from "./components/ProductSlider"

function App() {
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-evenly mt-6">
        <MainSlider />
        <PinCode />
      </div>
      <ProductSlider/>
    </>
  )
}

export default App
