
export const Log = async (stack, level, pkg, message) => {
    const url = "http://20.207.122.201/evaluation-service/logs"; //
    
    const requestBody = {
        stack: stack.toLowerCase(),    
        level: level.toLowerCase(),    
        package: pkg.toLowerCase(),   
        message: message               
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Logging failed:", error);
    }
};
