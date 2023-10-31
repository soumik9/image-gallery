import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "../../components/Item";
import Header from "../../components/Header";

const Home = () => {

    const initialItems = [1, 2, 3, 4, 5, 6];
    const [items, setItems] = useState(initialItems);

    return (
        <div className="bg-gray-100">

            <div className="container py-5">

                <div className="bg-white rounded-md pb-5">

                    {/* header */}
                    <Header />

                    <div className="pt-5 px-5">
                        <div className="grid grid-cols-4 gap-5">
                            {items.map(item => (
                                <div className="box-card border p-5" key={item}>
                                    <h2>Item {item}</h2>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>



                <Reorder.Group axis="y" onReorder={setItems} values={items}>
                    {items.map((item) => (
                        <Item key={item} item={item} />
                    ))}
                </Reorder.Group>

            </div>

        </div>
    )
}

export default Home