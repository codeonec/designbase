const GridItem = ({data}) => {
    return(
        <div className="listing-container">
          {data.map((obj)=>(
            <a href={obj.url} target="_blank"  key={obj.id}>
                <div className="grid-item">
                    <div className="item-thumb">
                        {obj.image?<img src={obj.image}></img>:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none"><path d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6z" stroke="#626262" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8.5" cy="8.5" r="2.5" stroke="#626262" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.526 12.621L6 22h12.27A3.73 3.73 0 0 0 22 18.27c0-.466-.175-.915-.49-1.26l-4.03-4.395a2 2 0 0 0-2.954.006z" stroke="#626262" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>}
                    </div>
                    <div className="item-info">
                        <div className="item-name">{obj.name}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none"><path d="M16 5l5 5l-5 5" stroke="#0F1419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 10h-8C7.477 10 3 14.477 3 20v1" stroke="#0F1419" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg></div>
                        {obj.category?<div className="item-category">{obj.category}</div>:null}
                        <div className="item-description">{obj.description}</div>
                    </div>                    
                </div>
            </a>
          ))}
        </div>
    )
}

export default GridItem