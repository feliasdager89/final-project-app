import React, { useEffect, useState } from "react";

import ListingCard from "./ListingCard";
import { findAllListings } from "./Client";

interface Listing {
    _id: string;
    title: string;
    description: string;
    location?: string;
    price?: number;
    available?: boolean;
}

const Listings: React.FC = () => {
    const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const data = await findAllListings();
                setListings(data);
            } catch (error) {
                setError("Failed to load listings.");
            } finally {
                setLoading(false);
            }
        };

        fetchListings();
    }, []);

    return (
        <div>
            <h2>Available Listings</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="listing-grid">
                    {listings.map((listing) => (
                        <ListingCard key={listing._id} listing={listing} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Listings;