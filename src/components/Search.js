import { Divider, Input } from 'antd';
import { useState } from 'react';


function Search(props) {
    const [filter, setFilter] = useState("");

    const handleFilter = (e) => {
        setFilter(e.target.value);
        props.filterFood(e.target.value);
    };
  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={filter} type="text" onChange={handleFilter} />
    </div>
  );
}

export default Search;
