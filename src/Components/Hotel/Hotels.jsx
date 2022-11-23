import { useState, useEffect, React } from 'react';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import hotelActions from "../../redux/actions/hotelActions"
import '../../Styles/HotelCard.css'


export default function Hotels(){
    const hotelList = useSelector(store => store.hotelsReducers.listsHotels)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [order, setOrder] = useState('asc')

    useEffect(() => {
        dispatch(hotelActions.getHotels())
        // eslint-disable-next-line
    }, [])
    useEffect(()=>{
        let filter = {
            name: search,
            order: order
        }
        dispatch(hotelActions.getHotelsFilters(filter))
        // eslint-disable-next-line
    },[search,order])

    function DataFetching() {
        function getRandomImage(arr) {
            const length = arr.length;
            const randomIndex = Math.floor(length * Math.random())
            return arr[randomIndex]
        }
        return (
            hotelList.map((e) => {
                return (
                    <div className="card-hotel">
                        <img key={e.id} className="img-card-hotel" src={getRandomImage(e.photo)} alt="hotel" />
                        <h3 className='text-hotel-card' key={e.id}>{e.name}</h3>
                        <Link className='text-hotel-card' key={e.id} to={`/DetailsHotel/${e._id}`}>See More</Link>
                    </div>
                )
            }
            )
        )
    }
    return (
        <>
            <div className="main-hotel">
                <div>
                    <div>
                        <label className="searchText">Sort by</label>
                        <select className="filter" type="select" onChange={e => {
                            let orderer = e.target.value
                            setOrder(orderer)
                        }} >
                            <option value="asc">Ascendent</option>
                            <option value="desc">Descendent</option>
                        </select>
                    </div>

                    <div className="select-container">
                        <label className="searchText">Search by Name</label>
                        <input onChange={e => {
                            let search = e.target.value
                            setSearch(search)
                        }} className="filter" type="search" />
                    </div>
                </div>
                <div className="hotels-container">
                    {<DataFetching />}
                </div>
            </div>
        </>
    )
}