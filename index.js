import { Log } from './logger.js';

Log("frontend", "info", "page", "Application initialized successfully"); //

const handleDataSubmit = () => {
    try {
        throw new Error("Data type mismatch");
    } catch (err) {
        Log("frontend", "error", "component", `Submission failed: ${err.message}`); //
    }
};

handleDataSubmit();
