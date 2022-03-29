const API = 'https://api.themoviedb.org/3'
export function get(patch )

{
    return fetch (API + patch, 
        {
            headers:
            {
                Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDhkYWY2MzkwMTZjOWRhY2FhYzdmNTZlZjc3ZDQxNCIsInN1YiI6IjYyMzdjZTE0MzRlMTUyMDA3MzRhMjQ5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Irol8gDs5rqnKW6WQJOGCooYpMsi0tEd2dVf1jxDkws',
                'Content-Type': 'application/json;charset=utf-8',

            }
        }).then(result => result.json());
}