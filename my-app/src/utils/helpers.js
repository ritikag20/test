//Imported in CallPageHeader.js to show the time on the video call screen and along with all the messages sent/received
import moment from 'moment';

export const formatDate = (timestamp) => {
    return moment(timestamp).format("h:mm A");
}