import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getProducts } from "../../data/asyncMock";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";

export default function ItemList({ products: initialProducts }) {
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!initialProducts) {
            const fetchProducts = async () => {
                try {
                    const data = await getProducts();
                    setProducts(data);
                } catch (error) {
                    console.error("Failed to fetch products", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchProducts();
        } else {
            setLoading(false);
        }
    }, [initialProducts]);

    return loading ? (
        <Loading />
    ) : (
        <div className="flex flex-wrap">
            {products.map((product) => (
                <Item {...product} key={product.id} />
            ))}
        </div>
    );
}

ItemList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ),
};
