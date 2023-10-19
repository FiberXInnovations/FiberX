"use strict";
require('dotenv').config('../../.env');
const config = process.env;
const fb_link = 'https://www.facebook.com/profile.php?id=61552583040655';
const twitter_link = 'https://twitter.com/FiberxInnovate';
const telegram_link= 'https://t.me/fiberxinnovations';
const ig_link = 'https://www.instagram.com/fiberx_innovations';
const yt_link = 'https://www.youtube.com/channel/UClZRR5ZxcbUimfYFpuUd4jQ';
const fb_img_link = 'https://storage.googleapis.com/fiyalo_staging/social_media_icons/fb_1.png';
const twitter_img_link = 'https://storage.googleapis.com/fiyalo_staging/social_media_icons/tw_1.png';
const telegram_img_link= 'https://storage.googleapis.com/fiyalo_staging/social_media_icons/tl_1.png';
const ig_img_link = 'https://storage.googleapis.com/fiyalo_staging/social_media_icons/ig_1.png';
const yt_img_link = 'https://storage.googleapis.com/fiyalo_staging/social_media_icons/yt_1.png';


const EmailAccounts = {
    "SYSTEM" : {
        username : config.SYSTEM_EMAIL_USERNAME,
        password:  config.SYSTEM_EMAIL_PASSWORD,
        port :      config.SYSTEM_EMAIL_PORT,
        host:       config.SYSTEM_EMAIL_HOST
    },
    'TEMPLATES' : {
        'generalEmail' : {
            required : [
                'from', 'current_date', 'to', 'user_fname', 'user_email', 
                'single_message', 'subject'
            ],
            subject : 'FiberX Innovations LTD.',
            from: 'system@fiberxinovations.com',
            reply_to : 'fiberxinnovations@gmail.com',
            current_date : 'Jun 16, 2023 04:23:35 PM WAT',
            to : 'text@gmail.com',
            user_fname : 'David',
            user_email : 'fdavid@gmail.com',
            single_message: '',
            fb_link,
            twitter_link,
            telegram_link,
            yt_link,
            ig_link,
            fb_img_link,
            twitter_img_link,
            telegram_img_link,
            ig_img_link,
            yt_img_link
        },

    }
}


module.exports = EmailAccounts;