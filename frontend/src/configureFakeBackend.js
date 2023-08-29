export default () => {
    window.fetch = (function (fetch) {
        return async function (url, opts) {
            // Simulate network latency
            await new Promise(resolve => setTimeout(resolve, 2000));

            if (url === "/api/contact" && opts.method === "POST") {
                const body = JSON.parse(opts.body);
                if (!body.name || !body.email || !body.message) {
                    return new Response(JSON.stringify({ error: "All fields are required." }), { status: 400 });
                }

                // Simulate random server errors
                if (Math.random() < 0.1) {
                    return new Response(JSON.stringify({ error: "Internal Server Error." }), { status: 500 });
                }

                // If everything goes well, return a success response
                return new Response(JSON.stringify({ message: "Your message has been sent." }), { status: 200 });
            }

            // For other routes or methods, call the original fetch function
            return fetch(url, opts);
        };
    })(window.fetch);
}