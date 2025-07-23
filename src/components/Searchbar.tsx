"use client";

import React from "react";
import styles from "./styles/Searchbar.module.css";

type SearchBarProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch?: () => void; // 任意: 検索ボタンを押したときの動作
};

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
    return (
        <div className={styles.searchBarWrapper}>
            <input
                type="text"
                placeholder="検索..."
                value={value}
                onChange={onChange}
                className={styles.searchInput}
            />
            <button
                type="submit"
                className={styles.searchButton}
                onClick={onSearch}
                aria-label="検索"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </button>
        </div>
    );
};
