import React from "react";
import { Timeline } from "react-twitter-widgets";

function TwitterWidget() {
    return (
        <>
            <Timeline
                dataSource={{
                    sourceType: "profile",
                    screenName: "NASA"
                }}
                options={{
                    height: "600"
                }}
            />
        </>
    );
}

export default TwitterWidget;
