// src/App.js
import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import WeatherCard from './components/WeatherCard';
import { fetchWeather } from './api';

const App = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const handleFetchWeather = async () => {
        if (city) {
            const data = await fetchWeather(city);
            setWeather(data);
        }
    };

    return (
        <SafeAreaView>
            <TextInput
                placeholder="Enter city"
                value={city}
                onChangeText={setCity}
                style={{ borderWidth: 1, margin: 10, padding: 10 }}
            />
            <Button title="Get Weather" onPress={handleFetchWeather} />
            <ScrollView>
                {weather && <WeatherCard weather={weather} />}
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
