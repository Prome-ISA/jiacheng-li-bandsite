// {
//         "api_key": "0ebab66d-a304-440e-a783-0111f784a4bd"
//     }
export default class BandSiteApi {
        constructor(apiKey) {
            this.apiKey = apiKey;
            this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com'; // Update with provided API URL
        }
    
        async register() {
            try {
                const response = await fetch(`${this.baseUrl}/register`);
                if (!response.ok) {
                    throw new Error('Failed to register');
                }
                const data = await response.json();
                this.apiKey = data.api_key;
                return this.apiKey;
            } catch (error) {
                console.error('Error registering:', error);
                throw error;
            }
        }
    
        async postComment(comment) {
            try {
                const response = await fetch(`${this.baseUrl}/comments?api_key=${this.apiKey}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(comment)
                });
                if (!response.ok) {
                    throw new Error('Failed to post comment');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error posting comment:', error);
                throw error;
            }
        }
    
        async getComments() {
            try {
                const response = await fetch(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
                if (!response.ok) {
                    throw new Error('Failed to get comments');
                }
                const comments = await response.json();
                return comments;
            } catch (error) {
                console.error('Error getting comments:', error);
                throw error;
            }
        }
    
        async getShows() {
            try {
                const response = await fetch(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
                if (!response.ok) {
                    throw new Error('Failed to get shows');
                }
                const shows = await response.json();
                return shows;
            } catch (error) {
                console.error('Error getting shows:', error);
                throw error;
            }
        }
}
  
    // test codes
    // (async () => {
    //     try {
    //         const bandSiteApi = new BandSiteApi();
    //         const apiKey = await bandSiteApi.register();
            
    //         const comment = { name: 'Nigel', comment: 'What a great band.' };
    //         const postedComment = await bandSiteApi.postComment(comment);
    //         console.log('Posted comment:', postedComment);
            
    //         const comments = await bandSiteApi.getComments();
    //         console.log('Comments:', comments);
            
    //         const shows = await bandSiteApi.getShows();
    //         console.log('Shows:', shows);
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // })();

    let showsApi = new BandSiteApi('0ebab66d-a304-440e-a783-0111f784a4bd')

