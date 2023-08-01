// Package imports
import 'dotenv/config';
// App imports
import { InstallGlobalCommands } from './utils.js';

// Simple test command
const YOUTUBE_COMMAND = {
  name: 'youtube',
  type: 1,
  description: 'Send a message containing information about a given YouTube link',
  options: [
    {
      name: "link",
      description: "The link to the YouTube video",
      type: 3,
      required: true,
    },
  ],
};

const ALL_COMMANDS = [YOUTUBE_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
