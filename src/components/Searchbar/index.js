import './styles.css';

const Searchbar = ({search, setSearch}) => { 

    return (
      <div className="searchbar-container">
        <div className="searchbar">
          <input type="text" 
            placeholder='🔍   Buscar Pokemon'
            value={search}
            onChange = {((e) => setSearch(e.target.value))}
          />                                                                                       
        </div>
      </div>
    );
  };
  
  export default Searchbar;
  