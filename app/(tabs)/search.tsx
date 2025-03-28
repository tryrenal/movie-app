import {ActivityIndicator, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from "react";
import MovieCard from "@/components/MovieCard";
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";
import {icons} from "@/constants/icons";
import SearchBar from "@/components/SearchBar";

const Search = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const { data: movies, loading: moviesLoading, error: moviesError, refetch: loadMovies, reset} =
        useFetch(() => fetchMovies({ query: searchQuery}), false);

    useEffect(() => {

        const timeoutId = setTimeout( async () => {
            if(searchQuery.trim()){
                await loadMovies();
            }
            else{
                reset()
            }
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    return (
        <View className="flex-1 bg-primary ">
            <FlatList
                data={movies}
                renderItem={({item}) => <MovieCard {...item}/> }
                keyExtractor={(item) => item.id.toString()}
                className="px-5"
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: 'center',
                    gap: 16,
                    marginVertical: 16
                }}
                contentContainerStyle={{paddingBottom: 100}}
                ListHeaderComponent={
                    <>
                        <View className="w-full flex-row justify-center mt-20 items-center">
                            <Image source={icons.ic_react} className="w-12 h-10" />
                        </View>

                        <View className="my-5">
                            <SearchBar
                                placeholder="search movie.."
                                value={searchQuery}
                                onChangeText={(text: string) => setSearchQuery(text)}
                            />
                        </View>

                        {moviesLoading && (
                            <ActivityIndicator size="large" color="#0000ff" className="my-3" />
                        )}

                        {moviesError && (
                            <Text className="text-red-500 px-5 my-3">
                                Error: {moviesError.message}
                            </Text>
                        )}

                        {!moviesLoading && !moviesError && searchQuery.trim() && movies?.length > 0 && (
                            <Text className="text-xl text-white font-bold">
                                Search Results for{' '}
                                <Text className='text-accent'>{searchQuery}</Text>
                            </Text>
                        ) }
                    </>
                }
                ListEmptyComponent={
                    !moviesLoading && !moviesError ? (
                        <View className="mt-10 px-5">
                            <Text className="text-center text-gray-100">
                                {searchQuery.trim() ? 'no movies found' : "search for movies"}
                            </Text>
                        </View>
                    ): null
                }
            />
        </View>
    );
}

export default Search;
const styles = StyleSheet.create({})