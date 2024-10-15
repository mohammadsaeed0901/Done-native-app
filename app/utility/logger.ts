import Bugsnag, { type NotifiableError } from "@bugsnag/expo";

const log = (error: NotifiableError) => Bugsnag.notify(error); 

const start = () => Bugsnag.start();

export default { start, log };