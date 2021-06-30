/*import React from 'react';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {
    const params = useParams();
    /**
     * Call server with imdbID
     * URL Format : http://localhost:3001/omdb/imdb/tt0944947
     * const imdbID = params.imdbID;
     */
    /*return (
       <p> Details page : Imdb ID {params.imdbID}</p>
    )
}*/
import React,  {  useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseUrl, axiosHeaders } from '../../utils/constants';
import './assets/stylesheets/main.css';

export default function DetailsPage() {
     /**
     * Call server with imdbID
     * URL Format : http://localhost:3001/omdb/imdb/tt0944947
     * const imdbID = params.imdbID;
     */
    const params = useParams();
    const [responseData, setResponseData] = useState('');
    const uri = `${baseUrl}omdb/imdb/${params.imdbID}`;

    useEffect( () => {
        axios.get(uri, axiosHeaders)
            .then(res => {console.log(res.data); setResponseData(res.data);})
            .catch(err => {console.error(err);});
        }, [uri]);
        
    if(responseData !== '')
    return (
        <> 
        <div className="main11">
            <section className="row-alt">
            <div className="lead container">
                <h1>{responseData.Title}</h1>
                    <img src={responseData.Poster} alt="poster"></img>
                <p className="data">{responseData.Plot}</p>
            </div>
            </section>
            <section className="row">
                <div className="container">
                <table className="extra1">
                    <tbody>
                        <tr>
                            <th scope="row">
                                Cast
                            </th>
                            <td className="schedule-offset" colSpan="2">
                            {responseData.Actors}
                            </td>
                            <th scope="row">
                                Released
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.Released}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Director
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.Director}
                            </td>
                            <th scope="row">
                                IMDB Rating
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.imdbRating}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Genre
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.Genre}
                            </td>
                            <th scope="row">
                                IMDB Votes
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.imdbVotes}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Language
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.Language}
                            </td>
                            <th scope="row">
                                BoxOffice
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.BoxOffice}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Country
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.Country}
                            </td>
                            <th scope="row">
                                Awards
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.Awards}
                            </td>
                        </tr>
                    </tbody>
                </table>


                <table className="extra2">
                    <tbody>
                        <tr>
                            <th scope="row">
                                Actors
                            </th>
                            <td className="schedule-offset" colSpan="2">
                            {responseData.Actors}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Released
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.Released}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Director
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.Director}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                IMDB Rating
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.imdbRating}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Genre
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.Genre}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                IMDB Votes
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.imdbVotes}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Language
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.Language}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                BoxOffice
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.BoxOffice}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Country
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.Country}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Awards
                            </th>
                            <td className="schedule-offset" colSpan="2">
                                {responseData.Awards}
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </section>
            </div>
            {/* <footer className="primary-footer container group">
            <small>&copy;OMDB API</small>
            </footer> */}
          
        </>
    )
    else
        return (<></>)
    }
    