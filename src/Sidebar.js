import Categories from "./Categories";
import Tags from "./Tags";

const Sidebar = () => {
    return (  
        <div className="sidebar">
            <h1>Sidebar component</h1>
            <p>tags</p>
            <p>categories</p>
    <Tags/>
    <Categories/>
        </div>
    );
}
 
export default Sidebar;