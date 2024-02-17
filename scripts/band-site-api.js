class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.example.com'; // Replace with your actual base API URL
        this.showsApiUrl = 'https://api.example.com/shows'; // Replace with the actual shows API URL
    }

    async postComment(comment) {
        try {
            const response = await fetch(`${this.baseUrl}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify(comment)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    async getComments() {
        try {
            const response = await fetch(`${this.baseUrl}/comments`, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });
            let comments = await response.json();
            // Sort comments from newest to oldest
            comments = comments.sort((a, b) => new Date(b.date) - new Date(a.date));
            return comments;
        } catch (error) {
            console.error('Error getting comments:', error);
            return [];
        }
    }

    async getShows() {
        try {
            const response = await fetch(this.showsApiUrl, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });
            const shows = await response.json();
            return shows;
        } catch (error) {
            console.error('Error getting shows:', error);
            return [];
        }
    }
}

// Example usage:
const apiKey = 'your-api-key';
const bandSiteApi = new BandSiteApi(apiKey);

// Example postComment usage:
const comment = { text: 'Great show!', user: 'John Doe' };
bandSiteApi.postComment(comment)
    .then(data => console.log('Posted comment:', data))
    .catch(error => console.error('Error:', error));

// Example getComments usage:
bandSiteApi.getComments()
    .then(comments => console.log('Comments:', comments))
    .catch(error => console.error('Error:', error));

// Example getShows usage:
bandSiteApi.getShows()
    .then(shows => console.log('Shows:', shows))
    .catch(error => console.error('Error:', error));
