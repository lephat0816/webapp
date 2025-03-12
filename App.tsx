
// ルーティングに必要なコンポーネント
import { Routes, Route } from "react-router-dom"

// レイアウトコンポーネント
import { Navbar } from "./components/layout/Navbar/Navbar"
import { Footer } from "./components/layout/Footer/Footer"

// 各ページコンポーネント
import { Home } from "./pages/Home/Home"
import { About } from "./pages/About/About"
import { Contact } from "./pages/Contact/Contact"
import { ProductsSection } from "./pages/Product/ProductsSection"
import { productData } from "./pages/Home/Home"

// import { NewsItem } from "./pages/News/NewsItem"
import { NewsSection } from "./pages/News/NewsSection"
import { Box } from "@mui/material"
import { newsData } from "./data/newsData"


function App() {
  return(
      <Box sx={{position: 'relative'}}>
        {/* ナビバーを固定位置で最前面に配置 */}
        <Navbar/>

        {/* メインコンテンツ */}
        <Box component="main" sx={{width: '100%'}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/product" element={<ProductsSection title="PRODUCT" products={productData}/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/news" element={<NewsSection title="お知らせ" news={newsData} />}/>
          </Routes>
        </Box>
        {/* フッター */}
        <Footer/>
      </Box>
    
  )
}

export default App
