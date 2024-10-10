import { createContext, useState } from "react";
import { baseURL } from "../baseURL";

export const AppContext = createContext();

function AppContextProvider({ children }) {
    //provide context to index.js everthing written inside context is children 
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);

    //filling data
    async function fetchBlogPost(page = 1) {
        setLoading(true);
        let url = `${baseURL}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);     
            setPosts(data.posts);
            setTotalPage(data.totalPages)

        }
        catch(error){
            console.log(error);
            alert("Something went wrong")
        }
        setLoading(false)
  }

  function handlePageChange(page){
    setPage(page);
    fetchBlogPost(page)
  } 

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fetchBlogPost,
        handlePageChange
    }

    return <AppContext.Provider value={value}>
        {children}  {/* App Component is childern go to index.js  */}
    </AppContext.Provider>
}

export default AppContextProvider;