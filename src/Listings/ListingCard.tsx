import React from "react";


interface Listing {
    _id: string;
    title: string;
    description: string;
    location?: string;
    price?: number;
    available?: boolean;
}

const ListingCard: React.FC<{ listing: Listing }> = ({ listing }) => {
    return (
        <div className="card">
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            {listing.location && <p><strong>Location:</strong> {listing.location}</p>}
            {listing.price && <p><strong>Price:</strong> ${listing.price}</p>}
            <p><strong>Available:</strong> {listing.available ? "Yes" : "No"}</p>
        </div>
    );
};

export default ListingCard;