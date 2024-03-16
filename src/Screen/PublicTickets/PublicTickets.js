import React, { useState, useEffect } from 'react';
import '../../Styles/PublicTickets.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaCalendar, FaComment } from 'react-icons/fa';
import Pagination from './Pagination';
import Ticket from './Ticket';
import avatar from '../../assets/avatar.webp'
import thumbnail from '../../assets/8794872685.png'
import appStore from '../../Store/AppStore';
import { observer } from 'mobx-react-lite';
const ITEMS_PER_PAGE = 10;
const PAGES_TO_SHOW = 10;

const PUBLICTICKERSS = observer(() => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [ticketData, setTicketData] = useState([]);
    
    const openTicket = (ticketInfo) => {
        appStore.setSelectedTicketInfo(ticketInfo)
        navigate(`/ticket/${ticketInfo.id}`);
        console.log(ticketInfo);
    };
    const fetchData = async () => {
        try {
            const response = await fetch('https://wpwebsol.com/wp-json/wpwsst/v1/data'); // Replace 'YOUR_API_ENDPOINT_HERE' with the actual API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            // Use API data if available
            setTicketData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const totalPages = Math.ceil(ticketData.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentTickets = ticketData.slice(startIndex, endIndex);
    const pageNumbers = [];

    for (let i = 1; i <= Math.min(PAGES_TO_SHOW, totalPages); i++) {
        pageNumbers.push(i);
    }


    return (
        <article className="ticket-article">
            <h3 className="ticket-title">Public Tickets</h3>
            <div className="ticket-container">
                {currentTickets.map((ticket, index) => (
                    <NavLink
                        to={`/ticket/${ticket.id}`} // Navigate to the ticket details page with the ticket ID
                        onClick={() => openTicket(ticket)}
                        className="ticket"
                        key={ticket.id}
                    >
                        <div className="avatar-container">
                            <img src={avatar} className="avatar" alt="User Avatar" />
                        </div>
                        <div className="ticket-details">
                            <span className="ticket-type-bar no-priority"></span>

                            <div className="publick-ticket-tittle">
                                <span className="ticket-customer">maryam</span>
                                <span className="ticket-customer-shope">{ticket.ticket_subject}</span>
                            </div>
                            <div className="description">
                                <img
                                    src={thumbnail}
                                    alt="Thumbnail"
                                    className="Thumbnail-img"
                                />
                                <span className="category-name">general</span>
                                <FaCalendar className="icon-general" />

                                <h3 className="category-name-updata">{ticket.created_at}</h3>
                                <FaComment className='icon-general-comment' />
                                <span className="category-name-comment">Comments</span>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>

            {/* Display page numbers */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(newPage) => setCurrentPage(newPage)}
                pagesToShow={10}
            />
            {selectedTicket && (
                <Ticket ticketId={selectedTicket} />
            )}

        </article>
    );
});

export default PUBLICTICKERSS;
