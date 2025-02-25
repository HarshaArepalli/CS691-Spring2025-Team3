import React, { useState, useEffect } from 'react';
import './Mix.css'; 
import yoga1 from "../assets/yoga1.jpg";
import yoga2 from "../assets/yoga2.jpg";
import yoga3 from "../assets/yoga3.jpg";
import yoga4 from "../assets/yoga4.jpg";
import gym1 from "../assets/gym-1.jpg";
import gym2 from "../assets/gym-2.jpg";
import gym3 from "../assets/gym-3.jpg";
import gym4 from "../assets/gym-4.jpg";
import meal1 from "../assets/m1.jpg";
import meal2 from "../assets/m2.jpg";
import meal3 from "../assets/m3.jpg";
import meal4 from "../assets/m4.jpg";

const Mix = () => {
    const [activeCategory, setActiveCategory] = useState('yoga');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); 
        return () => clearTimeout(timer);
    }, []);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const SkeletonImage = () => (
        <div className="yoga-container skeleton">
            <div className="skeleton-image"></div>
        </div>
    );

    const ImageContainer = ({ src, alt, text }) => (
        <div className="image-container">
            <img src={src} alt={alt} />
            <div className="hover-text">{text}</div>
        </div>
    );

    return (
        <div className="mix-container">
            <h1 className="mix-title">Join our Specialised programs and challenges</h1>
            <p className="mix-description">
                Participate in our Customized Programs and Challenges for Tailored Programs, Engaging Challenges, Expert Guidance, Community Support, and Progress Tracking.
            </p>
            <div className="button-group">
                <button className={`category-button ${activeCategory === 'yoga' ? 'active' : ''}`} onClick={() => handleCategoryChange('yoga')}>Yoga</button>
                <button className={`category-button ${activeCategory === 'gym' ? 'active' : ''}`} onClick={() => handleCategoryChange('gym')}>Gym</button>
                <button className={`category-button ${activeCategory === 'meal' ? 'active' : ''}`} onClick={() => handleCategoryChange('meal')}>Meal</button>
            </div>
            <div className="image-grid">
                {isLoading ? (
                    <>
                        <SkeletonImage />
                        <SkeletonImage />
                        <SkeletonImage />
                        <SkeletonImage />
                    </>
                ) : (
                    <>
                        {activeCategory === 'yoga' && (
                            <>
                                <ImageContainer src={yoga1} alt="Meditation" text="Meditation" />
                                <ImageContainer src={yoga2} alt="Pilates" text="Pilates" />
                                <ImageContainer src={yoga3} alt="Yoga" text="Yoga" />
                                <ImageContainer src={yoga4} alt="Ayurveda" text="Ayurveda" />
                            </>
                        )}
                        {activeCategory === 'gym' && (
                            <>
                                <ImageContainer src={gym1} alt="Biceps" text="Biceps" />
                                <ImageContainer src={gym2} alt="Triceps" text="Triceps" />
                                <ImageContainer src={gym3} alt="Chest" text="Chest" />
                                <ImageContainer src={gym4} alt="Legs" text="Legs" />
                            </>
                        )}
                        {activeCategory === 'meal' && (
                            <>
                                <ImageContainer src={meal1} alt="Breakfast" text="Breakfast" />
                                <ImageContainer src={meal2} alt="Lunch" text="Lunch" />
                                <ImageContainer src={meal3} alt="Dinner" text="Dinner" />
                                <ImageContainer src={meal4} alt="Drinks&Desserts" text="Drinks&Desserts" />
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Mix;
