import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/Header/Header.jsx';
import FooterComponent from './components/Footer/Footer.jsx';
import HomePage from './components/Home/Home.jsx';
import AboutPage from "./components/About/About.jsx";
import ContactPage from './components/Contact/Contact';
import ProductsPage from './components/Products/Products';
import ItemDetail from './components/ProductDetail/ProductDetail.jsx';
import ProductsCategory from './components/Category/Category';
import { CartProvider } from './context/CartContext';
import Card from './components/Card/Card';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="app-container flex flex-col min-h-screen">
                    <HeaderComponent />

                    <main className="flex-grow">
                        <Routes>
                            <Route path= "/card" element={<CardPage/>} />
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/products" element={<ProductsPage />} />
                            <Route path="/products/:productId" element={<ItemDetail />} />
                            <Route path="/category/:categoryId" element={<ProductsCategory />} />
                            <Route path="/CartProvider" element={<AboutPage />} />
                        </Routes>
                    </main>

                    <FooterComponent />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
