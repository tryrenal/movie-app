import {ActivityIndicator, FlatList, Image, ScrollView, Text, View} from "react-native";
import {useRouter} from "expo-router";
import {icons} from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import {fetchMovies} from "@/services/api";
import useFetch from "@/services/useFetch";
import MovieCard from "@/components/MovieCard";

export default function Index() {

    const router = useRouter();
    const { data: movies, loading: moviesLoading, error: moviesError} =
        useFetch(() => fetchMovies({ query: ''}));

    return (
        <View className="flex-1 bg-primary">
            <ScrollView className="flex-1 px-5"
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            minHeight: "100%",
                            paddingBottom: 10
                        }}>
                <Image source={icons.ic_react} className="w-212 h-15 mt-20 mb-5 mx-auto"/>
                {
                    moviesLoading? (
                        <ActivityIndicator size='large' color='#000ff' className='mt-10 self-center'/>
                    ) : moviesError ? (
                        <Text>Error: {moviesError?.message}</Text>
                    ) : (
                        <View className="flex-1 mt-5">
                            <SearchBar
                                onPress={() => router.push("/search")}
                                placeholder="Search for a movie"
                            />

                            <>
                                <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>

                                <FlatList
                                    data={movies}
                                    renderItem={({item}) => (
                                        <MovieCard
                                            {...item}
                                        />
                                    )}
                                    keyExtractor={(item) => item.id.toString()}
                                    numColumns={3}
                                    columnWrapperStyle={{
                                        justifyContent: 'flex-start',
                                        gap:20,
                                        paddingRight: 5,
                                        marginBottom: 10
                                    }}
                                    className="mt-5 pb-32"
                                    scrollEnabled={false}
                                />
                            </>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );
}
