import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import styles from "./faceboock.module.css";
import Loading from "../../components/Loading";

const Facebook = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const dummyPost = {
    items: [
      {
        id: "UzpfSTYxNTU0MzM2NTU3NDA5OjEyMjEyODYyMDcxNjE0NDU1MToxMjIxMjg2MjA3MTYxNDQ1NTE=",
        postId: "122128620716144551",
        feedbackId: "ZmVlZGJhY2s6MTIyMTI4NjIwNzE2MTQ0NTUx",
        user: {
          id: "61554336557409",
          name: "Pearl Beauty ",
          profileUrl:
            "https://www.facebook.com/people/Pearl-Beauty/61554336557409/",
          profilePic:
            "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-1/423779804_122121727796144551_7943119511492071159_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rRiUQtI3U-oAb5lLSCF&_nc_ht=scontent-ord5-2.xx&oh=00_AfCM4mwGh0ABNqQz48q4fdvbWHYcNsGOb4clJX7M-U6TPw&oe=661852CC",
        },
        date: "2024-03-03T23:26:36.000Z",
        url: "https://www.facebook.com/permalink.php?story_fbid=pfbid02CbddCAyWHSYbcQmjXUfk8AoTx7yAnEWGTn47af3mWxsNvZjv3Bp3gJRWxBA8A8cdl&id=61554336557409",
        text: "Beautiful pearls #pearls #jewelry #fashion #pearl #handmade #earrings #jewellery #necklace #gold #pearlnecklace",
        attachments: [
          {
            thumbnail:
              "https://scontent-ord5-2.xx.fbcdn.net/v/t15.5256-10/429379321_856634376219299_7178350454240022578_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9prAbDZJE7wAb4e8JqZ&_nc_ht=scontent-ord5-2.xx&oh=00_AfDutJLRO21MJSI0s91zFfVDTcurMWXDZLt8Mpz4ntx_0Q&oe=66183B50",
            __typename: "Video",
            thumbnailImage: {
              uri: "https://scontent-ord5-2.xx.fbcdn.net/v/t15.5256-10/429379321_856634376219299_7178350454240022578_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9prAbDZJE7wAb4e8JqZ&_nc_ht=scontent-ord5-2.xx&oh=00_AfDutJLRO21MJSI0s91zFfVDTcurMWXDZLt8Mpz4ntx_0Q&oe=66183B50",
            },
            id: "704382698551319",
            is_clipping_enabled: false,
            live_rewind_enabled: false,
            owner: {
              __typename: "User",
              id: "61554336557409",
              __isVideoOwner: "User",
              has_professional_features_for_watch: true,
            },
            playable_duration_in_ms: 16300,
            is_huddle: false,
            url: "https://www.facebook.com/reel/704382698551319/",
            if_viewer_can_use_latency_menu: null,
            if_viewer_can_use_latency_menu_toggle: null,
            captions_url: null,
            video_available_captions_locales: [],
            if_viewer_can_see_community_moderation_tools: null,
            if_viewer_can_use_live_rewind: null,
            if_viewer_can_use_clipping: null,
            if_viewer_can_see_costreaming_tools: null,
            video_player_scrubber_base_content_renderer: null,
            video_player_scrubber_preview_renderer: {
              __typename: "XFBVideoPlayerScrubberDefaultPreviewRenderer",
              video: {
                scrubber_preview_thumbnail_information: {
                  sprite_uris: [
                    "https://scontent-ord5-1.xx.fbcdn.net/v/t15.6481-10/429325887_981403003705103_1468457790103419280_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=62976d&_nc_ohc=MxuUlWLhKMsAb6vfKTb&_nc_ht=scontent-ord5-1.xx&oh=00_AfC-fWWhsPlnwSrcNISitnj2bZwrfMUsLeqX5wjgc57ZoQ&oe=66186F07",
                  ],
                  thumbnail_width: 1080,
                  thumbnail_height: 1920,
                  has_preview_thumbnails: true,
                  num_images_per_row: 10,
                  max_number_of_images_per_sprite: 100,
                  time_interval_between_image: 1,
                },
                id: "704382698551319",
              },
              __module_operation_VideoPlayerScrubberPreview_video: {
                __dr: "VideoPlayerScrubberDefaultPreview_video$normalization.graphql",
              },
              __module_component_VideoPlayerScrubberPreview_video: {
                __dr: "VideoPlayerScrubberDefaultPreview.react",
              },
            },
            recipient_group: null,
            music_attachment_metadata: null,
            video_container_type: "FB_SHORTS_POST",
            breakingStatus: false,
            videoId: "704382698551319",
            isPremiere: false,
            liveViewerCount: 0,
            rehearsalInfo: null,
            is_gaming_video: false,
            is_live_audio_room_v2_broadcast: false,
            publish_time: 1709508379,
            live_speaker_count_indicator: null,
            can_viewer_share: false,
            end_cards_channel_info: {
              video_chaining_caller: "CHANNEL_VIEW_FROM_END_CARD",
              video_channel_entry_point: "SEARCH",
              video: {
                id: "704382698551319",
                can_viewer_share: false,
                creation_story: {
                  shareable: null,
                  id: "UzpfSTYxNTU0MzM2NTU3NDA5OlZLOjcwNDM4MjY5ODU1MTMxOQ==",
                },
              },
              __module_operation_useVideoPlayerWatchEndScreenWithActions_video:
                {
                  __dr: "VideoPlayerWatchInlineEndScreen_info$normalization.graphql",
                },
              __module_component_useVideoPlayerWatchEndScreenWithActions_video:
                {
                  __dr: "VideoPlayerWatchInlineEndScreen.react",
                },
            },
            is_soundbites_video: false,
            is_looping: false,
            info: {
              video_chaining_caller: "CHANNEL_VIEW_FROM_END_CARD",
              video_channel_entry_point: "SEARCH",
              video_id: "704382698551319",
              __module_operation_useVideoPlayerWatchPauseScreenWithActions_video:
                {
                  __dr: "VideoPlayerWatchInlinePauseScreen_info$normalization.graphql",
                },
              __module_component_useVideoPlayerWatchPauseScreenWithActions_video:
                {
                  __dr: "VideoPlayerWatchInlinePauseScreen.react",
                },
            },
            animated_image_caption: null,
            width: 1080,
            height: 1920,
            broadcaster_origin: null,
            broadcast_id: null,
            broadcast_status: null,
            dash_manifest:
              '<?xml version="1.0" encoding="UTF-8"?>\n<MPD xmlns="urn:mpeg:dash:schema:mpd:2011" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:mpeg:dash:schema:mpd:2011 DASH-MPD.xsd" profiles="urn:mpeg:dash:profile:isoff-on-demand:2011" minBufferTime="PT2S" type="static" mediaPresentationDuration="PT16.299999237060547S" FBTagsetUsed="r2evevp9-r1gen2vp9" FBManifestIdentifier="FgAYEnIyZXZldnA5LXIxZ2VuMnZwORn2EaCUqtaVvmz039LN7pqqAfyeh4WyocEBvoXAycqhwgHi8vOp2MWhA7T2v9CtnK4D7oqOkNS8sgOOs4Hv5u22A9KTrYavvtsDwvvwodyn6AOu2vjVvq37A8qno5a/qooEuq7EhOXwpQTUoarEs8vkBIq7hb+qj68GjoTw35Os6wu8o8z5mZzDGwA="><Period id="0" duration="PT16.299999237060547S"><AdaptationSet id="0" contentType="video" frameRate="15360/512" subsegmentAlignment="true" par="9:16"><SupplementalProperty schemeIdUri="urn:mpeg:dash:adaptation-set-switching:2016" value="1"/><Representation id="374295475410938v" bandwidth="143747" codecs="av01.0.01M.08.0.111.05.06.06.0" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2av1-r1gen2vp9_q20" FBPlaybackResolutionMos="0:100,360:43.6,480:41.6,720:41.2,1080:43.9" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:73.2,480:65.5,720:54.2,1080:43.6" FBAbrPolicyTags="" width="360" height="640" FBDefaultQuality="1" FBQualityClass="sd" FBQualityLabel="240p"><BaseURL>https://video-ord5-1.xx.fbcdn.net/v/t39.25447-2/430988075_364872316455659_2658086227076227690_n.mp4?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJhdjEtcjFnZW4ydnA5X3EyMCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=mJsvXQ65HwYAb7Q0jUB&amp;_nc_ht=video-ord5-1.xx&amp;oh=00_AfDb2GWU8Hjfqw1zVC0qQZPhzxt42wAXU0DGjI6zbSDSrQ&amp;oe=66185C81</BaseURL><SegmentBase indexRange="819-898" timescale="15360" FBFirstSegmentRange="899-76096" FBMinimumPrefetchRange="899-11172"><Initialization range="0-818"/></SegmentBase></Representation><Representation id="7747643448592606v" bandwidth="321206" codecs="av01.0.04M.08.0.111.05.06.06.0" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2av1-r1gen2vp9_q30" FBPlaybackResolutionMos="0:100,360:61.8,480:58.6,720:56.7,1080:57.7" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:86.3,480:80.9,720:72.1,1080:62.7" FBAbrPolicyTags="" width="540" height="960" FBQualityClass="sd" FBQualityLabel="270p"><BaseURL>https://video-ord5-1.xx.fbcdn.net/v/t39.25447-2/431310953_954290996112766_9085953542794982781_n.mp4?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJhdjEtcjFnZW4ydnA5X3EzMCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=J0Ut1VUbc-QAb7Oj8l2&amp;_nc_ht=video-ord5-1.xx&amp;oh=00_AfD7Tdhzwjz1Z7FjV2KcIOh9GEHfMTdL2sopLtjWKo_rcw&amp;oe=66184E1B</BaseURL><SegmentBase indexRange="819-898" timescale="15360" FBFirstSegmentRange="899-176462" FBMinimumPrefetchRange="899-20246"><Initialization range="0-818"/></SegmentBase></Representation><Representation id="1792467354562245v" bandwidth="404764" codecs="av01.0.05M.08.0.111.05.06.06.0" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2av1-r1gen2vp9_q40" FBPlaybackResolutionMos="0:100,360:65.2,480:62.1,720:59.9,1080:60.4" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:88.1,480:83.4,720:75,1080:66.1" FBAbrPolicyTags="" width="720" height="1280" FBQualityClass="hd" FBQualityLabel="360p"><BaseURL>https://video-ord5-2.xx.fbcdn.net/v/t39.25447-2/417463748_913883593749767_16974620964158081_n.mp4?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJhdjEtcjFnZW4ydnA5X3E0MCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=qK6hYUDHhwoAb4BYZHd&amp;_nc_ht=video-ord5-2.xx&amp;oh=00_AfDvSoByUIGZDB5kpvBR8KFmkzok_sMZqZPsPyNDRnzjVg&amp;oe=66184937</BaseURL><SegmentBase indexRange="819-898" timescale="15360" FBFirstSegmentRange="899-225340" FBMinimumPrefetchRange="899-23029"><Initialization range="0-818"/></SegmentBase></Representation><Representation id="3332278797074695v" bandwidth="576454" codecs="av01.0.05M.08.0.111.05.06.06.0" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2av1-r1gen2vp9_q50" FBPlaybackResolutionMos="0:100,360:72.7,480:69.8,720:67.3,1080:66.9" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:92.4,480:88.8,720:81.8,1080:74.2" FBAbrPolicyTags="hvq_www_inline,hvq" width="720" height="1280" FBQualityClass="hd" FBQualityLabel="480p"><BaseURL>https://video-ord5-2.xx.fbcdn.net/v/t39.25447-2/428698135_437173411991255_1311906155442508362_n.mp4?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJhdjEtcjFnZW4ydnA5X3E1MCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=qTp7cMz_epYAb6ycwnG&amp;_nc_ht=video-ord5-2.xx&amp;oh=00_AfDsIHO3LiLK0I4LTnTZTHvD8LHLggErppJeo1WwdyARBA&amp;oe=66186F57</BaseURL><SegmentBase indexRange="819-898" timescale="15360" FBFirstSegmentRange="899-325265" FBMinimumPrefetchRange="899-29167"><Initialization range="0-818"/></SegmentBase></Representation><Representation id="1148620172978661v" bandwidth="803060" codecs="av01.0.05M.08.0.111.05.06.06.0" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2av1-r1gen2vp9_q60" FBPlaybackResolutionMos="0:100,360:78,480:75.4,720:72.9,1080:71.9" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:95.2,480:92.6,720:87.1,1080:80.5" FBAbrPolicyTags="hvq_www_inline,hvq" width="720" height="1280" FBQualityClass="hd" FBQualityLabel="540p"><BaseURL>https://video-ord5-1.xx.fbcdn.net/v/t39.25447-2/428684936_810995074210884_3004646353260827830_n.mp4?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJhdjEtcjFnZW4ydnA5X3E2MCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=rp6HdFemsxkAb4GyExZ&amp;_nc_ht=video-ord5-1.xx&amp;oh=00_AfAp92wuQNiBQV4X3ZtHVQwGqlhYd0L02sPj0F3nhNrduw&amp;oe=661838FF</BaseURL><SegmentBase indexRange="819-898" timescale="15360" FBFirstSegmentRange="899-462223" FBMinimumPrefetchRange="899-35951"><Initialization range="0-818"/></SegmentBase></Representation><Representation id="965058598284487v" bandwidth="1006931" codecs="av01.0.05M.08.0.111.05.06.06.0" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2av1-r1gen2vp9_q70" FBPlaybackResolutionMos="0:100,360:82.1,480:78.8,720:76,1080:74.7" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:96.6,480:94.6,720:90,1080:84.1" FBAbrPolicyTags="hvq_www_inline,hvq" width="720" height="1280" FBQualityClass="hd" FBQualityLabel="640p"><BaseURL>https://video-ord5-2.xx.fbcdn.net/v/t39.25447-2/428507712_781469739999383_1678377500583793474_n.mp4?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJhdjEtcjFnZW4ydnA5X3E3MCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=AWKc9gsh2fEAb4Hk0fD&amp;_nc_oc=AdjjSn6kbO9ZuBy9W75FG6YFHyrTwqMCvlRv7K3TadHv3G8tAd21pohfgnBGciyfqyy3gAw5U9whL4Dlbzf4M2Y0&amp;_nc_ht=video-ord5-2.xx&amp;oh=00_AfDGFQTOMwp696ylVuwAPmiaBBgRKPs4SowboiXyR1dDmg&amp;oe=66185AD2</BaseURL><SegmentBase indexRange="819-898" timescale="15360" FBFirstSegmentRange="899-585608" FBMinimumPrefetchRange="899-40610"><Initialization range="0-818"/></SegmentBase></Representation><Representation id="1045607513171177v" bandwidth="1366351" codecs="av01.0.05M.08.0.111.05.06.06.0" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2av1-r1gen2vp9_q80" FBPlaybackResolutionMos="0:100,360:86,480:83.1,720:79.7,1080:77.5" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:97.8,480:96.6,720:93,1080:88.2" FBAbrPolicyTags="hvq_www_inline,hvq" width="720" height="1280" FBQualityClass="hd" FBQualityLabel="720p"><BaseURL>https://video-ord5-2.xx.fbcdn.net/v/t39.25447-2/431218920_802188578396019_4776888158175639068_n.mp4?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJhdjEtcjFnZW4ydnA5X3E4MCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=seUDW2O7YugAb5YG1gn&amp;_nc_ht=video-ord5-2.xx&amp;oh=00_AfCo1XWxZhTOPbfIgDsQXX5ozgj8jxElcomElgEzrY5Nvw&amp;oe=66183A40</BaseURL><SegmentBase indexRange="819-898" timescale="15360" FBFirstSegmentRange="899-806084" FBMinimumPrefetchRange="899-45172"><Initialization range="0-818"/></SegmentBase></Representation><Representation id="424985140193214v" bandwidth="2047262" codecs="av01.0.08M.08.0.111.05.06.06.0" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2av1-r1gen2vp9_q90" FBPlaybackResolutionMos="0:100,360:89.6,480:87.1,720:84,1080:82.2" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:98.45,480:97.7,720:95.5,1080:91.6" FBAbrPolicyTags="avoid_on_cellular,avoid_on_cellular_intentional,hvq_www_inline,hvq" width="1080" height="1920" FBQualityClass="hd" FBQualityLabel="1080p"><BaseURL>https://video-ord5-2.xx.fbcdn.net/v/t39.25447-2/428705383_1795739984222671_2056134069127535706_n.mp4?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJhdjEtcjFnZW4ydnA5X3E5MCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=RmlFw-Ub-4sAb53tmtU&amp;_nc_ht=video-ord5-2.xx&amp;oh=00_AfBHWQxdWIcJGwd9W1wWxj0-qijWZbtjiwBtemB0RG7i1A&amp;oe=66186EE7</BaseURL><SegmentBase indexRange="819-898" timescale="15360" FBFirstSegmentRange="899-1206443" FBMinimumPrefetchRange="899-58636"><Initialization range="0-818"/></SegmentBase></Representation></AdaptationSet><AdaptationSet id="1" contentType="video" frameRate="15360/512" subsegmentAlignment="true" par="9:16"><SupplementalProperty schemeIdUri="urn:mpeg:dash:adaptation-set-switching:2016" value="0"/><Representation id="1209201473391517v" bandwidth="95655" codecs="vp09.00.21.08.00.05.06.06.00" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2evevp9-r1gen2vp9_q20" FBPlaybackResolutionMos="0:100,360:28.8,480:27.2,720:27.6,1080:31.2" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:55.8,480:46.3,720:34.7,1080:24.2" FBAbrPolicyTags="" width="360" height="640" FBDefaultQuality="1" FBQualityClass="sd" FBQualityLabel="240p"><BaseURL>https://video-ord5-2.xx.fbcdn.net/v/t39.25447-2/429761843_1161218621919545_3028331468364279347_n.mp4?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJldmV2cDktcjFnZW4ydnA5X3EyMCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=2-ipBBPqcVwAb6zBB-p&amp;_nc_ht=video-ord5-2.xx&amp;oh=00_AfBj18W2gegaBtW2rZu5Xah0r62EJKoAsM10gIuFFnJo9Q&amp;oe=66183F9D</BaseURL><SegmentBase indexRange="792-871" timescale="15360" FBFirstSegmentRange="872-51758" FBMinimumPrefetchRange="872-6620"><Initialization range="0-791"/></SegmentBase></Representation><Representation id="955418176242359v" bandwidth="225640" codecs="vp09.00.30.08.00.05.06.06.00" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2evevp9-r1gen2vp9_q30" FBPlaybackResolutionMos="0:100,360:48.8,480:45.3,720:43.7,1080:45.4" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:74.7,480:67,720:55.8,1080:45.2" FBAbrPolicyTags="" width="540" height="960" FBQualityClass="sd" FBQualityLabel="270p"><BaseURL>https://video-ord5-1.xx.fbcdn.net/v/t39.25447-2/429658580_442456168118185_9214181981104456010_n.mp4?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJldmV2cDktcjFnZW4ydnA5X3EzMCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=O6Es0bOGYw4Ab610Qsy&amp;_nc_ht=video-ord5-1.xx&amp;oh=00_AfCbWgypOlXA9KoW9EMA1LdIdXqb8gdrAR8v-AAZ9LuLMQ&amp;oe=6618537E</BaseURL><SegmentBase indexRange="792-871" timescale="15360" FBFirstSegmentRange="872-126372" FBMinimumPrefetchRange="872-12716"><Initialization range="0-791"/></SegmentBase></Representation><Representation id="427187456442719v" bandwidth="353691" codecs="vp09.00.31.08.00.05.06.06.00" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2evevp9-r1gen2vp9_q40" FBPlaybackResolutionMos="0:100,360:60.4,480:56.9,720:54.5,1080:54.9" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:82.8,480:76.6,720:67,1080:57.5" FBAbrPolicyTags="" width="720" height="1280" FBQualityClass="hd" FBQualityLabel="360p"><BaseURL>https://video-ord5-1.xx.fbcdn.net/v/t39.25447-2/429585354_775732363999097_3481890810528727647_n.mp4?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJldmV2cDktcjFnZW4ydnA5X3E0MCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=mWEJNuc1e4gAb6xxN78&amp;_nc_ht=video-ord5-1.xx&amp;oh=00_AfC-t1A_V7wGZ3qAz3O4DEeMV1c_zxecRGG82UfrfK1-tQ&amp;oe=66186747</BaseURL><SegmentBase indexRange="792-871" timescale="15360" FBFirstSegmentRange="872-207122" FBMinimumPrefetchRange="872-17480"><Initialization range="0-791"/></SegmentBase></Representation><Representation id="1347097639340138v" bandwidth="541767" codecs="vp09.00.31.08.00.05.06.06.00" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2evevp9-r1gen2vp9_q50" FBPlaybackResolutionMos="0:100,360:70.4,480:67.2,720:64.1,1080:63.5" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:90.3,480:86,720:78.3,1080:69.9" FBAbrPolicyTags="hvq_www_inline,hvq" width="720" height="1280" FBQualityClass="hd" FBQualityLabel="480p"><BaseURL>https://video-ord5-2.xx.fbcdn.net/v/t39.25447-2/430656234_1512635192664494_7040813809473099575_n.mp4?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJldmV2cDktcjFnZW4ydnA5X3E1MCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=7Hlt0EoGaYoAb7GQP_K&amp;_nc_ht=video-ord5-2.xx&amp;oh=00_AfDOjjiAZYRUf7mdZ7e_B-SejNKvMV_hBBPohlMegttv7w&amp;oe=661862D3</BaseURL><SegmentBase indexRange="792-871" timescale="15360" FBFirstSegmentRange="872-322912" FBMinimumPrefetchRange="872-22587"><Initialization range="0-791"/></SegmentBase></Representation><Representation id="1115686296295063v" bandwidth="798730" codecs="vp09.00.31.08.00.05.06.06.00" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2evevp9-r1gen2vp9_q60" FBPlaybackResolutionMos="0:100,360:77.7,480:75,720:72.1,1080:70.8" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:94.3,480:91.4,720:85.5,1080:78.5" FBAbrPolicyTags="hvq_www_inline,hvq" width="720" height="1280" FBQualityClass="hd" FBQualityLabel="540p"><BaseURL>https://video-ord5-2.xx.fbcdn.net/v/t39.25447-2/431368545_1319439512055697_5894996906517353877_n.mp4?_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJldmV2cDktcjFnZW4ydnA5X3E2MCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=ySXjvvCkn0AAb4qA4eB&amp;_nc_ht=video-ord5-2.xx&amp;oh=00_AfCQguYJkCEZbiYv_uO-xNkYAyI_oROEpWEjdi3KSNCOWg&amp;oe=661857C1</BaseURL><SegmentBase indexRange="792-871" timescale="15360" FBFirstSegmentRange="872-480375" FBMinimumPrefetchRange="872-28278"><Initialization range="0-791"/></SegmentBase></Representation><Representation id="918189963639985v" bandwidth="1151278" codecs="vp09.00.31.08.00.05.06.06.00" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2evevp9-r1gen2vp9_q70" FBPlaybackResolutionMos="0:100,360:83.5,480:80.2,720:76.8,1080:75.3" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:95.9,480:93.6,720:88.6,1080:82.3" FBAbrPolicyTags="hvq_www_inline,hvq" width="720" height="1280" FBQualityClass="hd" FBQualityLabel="640p"><BaseURL>https://video-ord5-1.xx.fbcdn.net/v/t39.25447-2/429750100_1175171880111839_6891236714432509262_n.mp4?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJldmV2cDktcjFnZW4ydnA5X3E3MCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=_pIqFaHmzYwAb58FUOF&amp;_nc_ht=video-ord5-1.xx&amp;oh=00_AfBLIaeiuVmc8lFQkj5jqeWUf4kjAw0qyoDLZySuklUz7g&amp;oe=66186023</BaseURL><SegmentBase indexRange="792-871" timescale="15360" FBFirstSegmentRange="872-703166" FBMinimumPrefetchRange="872-35734"><Initialization range="0-791"/></SegmentBase></Representation><Representation id="946067160432026v" bandwidth="1800694" codecs="vp09.00.31.08.00.05.06.06.00" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2evevp9-r1gen2vp9_q80" FBPlaybackResolutionMos="0:100,360:88.6,480:86.1,720:82.8,1080:80.3" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:98.02,480:97,720:93.7,1080:89.3" FBAbrPolicyTags="avoid_on_cellular,hvq_www_inline,hvq" width="720" height="1280" FBQualityClass="hd" FBQualityLabel="720p"><BaseURL>https://video-ord5-2.xx.fbcdn.net/v/t39.25447-2/429820855_197413353465860_8325262261959611801_n.mp4?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJldmV2cDktcjFnZW4ydnA5X3E4MCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=rmd4Gc_4W7gAb41Zn2j&amp;_nc_ht=video-ord5-2.xx&amp;oh=00_AfA9ypoy0oQRZaqJAKQRuThnAczhxN2z_zizilbWIOx83w&amp;oe=6618380F</BaseURL><SegmentBase indexRange="792-871" timescale="15360" FBFirstSegmentRange="872-1092930" FBMinimumPrefetchRange="872-46246"><Initialization range="0-791"/></SegmentBase></Representation><Representation id="238562572584208v" bandwidth="2961085" codecs="vp09.00.40.08.00.05.06.06.00" mimeType="video/mp4" sar="1:1" FBEncodingTag="dash_r2evevp9-r1gen2vp9_q90" FBPlaybackResolutionMos="0:100,360:92.9,480:90.8,720:87.9,1080:86" FBPlaybackResolutionMosConfidenceLevel="high" FBPlaybackResolutionCsvqm="0:100,360:98.96,480:98.43,720:97.1,1080:94.4" FBAbrPolicyTags="avoid_on_cellular,avoid_on_cellular_intentional,hvq_www_inline,hvq" width="1080" height="1920" FBQualityClass="hd" FBQualityLabel="1080p"><BaseURL>https://video-ord5-2.xx.fbcdn.net/v/t39.25447-2/429805117_980448160344570_9076533682867795735_n.mp4?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfcjJldmV2cDktcjFnZW4ydnA5X3E5MCIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=vHCjW4oBL7YAb4yH1dT&amp;_nc_ht=video-ord5-2.xx&amp;oh=00_AfBFdmLxBHNv95JXAP6mx8nBInAzrUQANQF_9n4K4tUAVA&amp;oe=661861B0</BaseURL><SegmentBase indexRange="792-871" timescale="15360" FBFirstSegmentRange="872-1815242" FBMinimumPrefetchRange="872-63633"><Initialization range="0-791"/></SegmentBase></Representation></AdaptationSet><AdaptationSet id="2" contentType="audio" subsegmentAlignment="true"><Representation id="1073805747166945a" bandwidth="65880" codecs="mp4a.40.5" mimeType="audio/mp4" FBAvgBitrate="65880" audioSamplingRate="44100" FBEncodingTag="dash_audio_aacp_64_fnorm14_frag_2_audio" FBAbrPolicyTags="" FBDefaultQuality="1"><AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/><BaseURL>https://video-ord5-2.xx.fbcdn.net/v/t39.25447-2/417524306_366098156306385_6922763905889906194_n.mp4?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=9a5d50&amp;efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfYXVkaW9fYWFjcF82NF9mbm9ybTE0X2ZyYWdfMl9hdWRpbyIsInZpZGVvX2lkIjo3MDQzODI2OTg1NTEzMTl9&amp;_nc_ohc=SnnDxuZDA58Ab5b01OI&amp;_nc_ht=video-ord5-2.xx&amp;oh=00_AfCm0obu2P1j8hKN_FDJDSnDAPJo3azQcyscmwfonloWbA&amp;oe=66186AE2</BaseURL><SegmentBase indexRange="817-956" timescale="44100" FBFirstSegmentRange="957-18751" FBMinimumPrefetchRange="957-1644"><Initialization range="0-816"/></SegmentBase></Representation></AdaptationSet></Period></MPD>\n',
            is_live_streaming: false,
            is_live_trace_enabled: false,
            is_video_broadcast: false,
            is_podcast_video: false,
            loop_count: 0,
            is_spherical: false,
            is_spherical_enabled: true,
            unsupported_browser_message: null,
            pmv_metadata: null,
            latency_sensitive_config: null,
            live_playback_instrumentation_configs: null,
            is_ncsr: false,
            permalink_url: "https://www.facebook.com/reel/704382698551319/",
            dash_prefetch_experimental: [
              "1792467354562245v",
              "1073805747166945a",
            ],
            video_status_type: "OK",
            can_use_oz: true,
            dash_manifest_url:
              "https://www.facebook.com/video/playback/dash_mpd_debug.mpd?v=704382698551319&dummy=.mpd",
            min_quality_preference: "HD",
            audio_user_preferred_language: "en",
            is_rss_podcast_video: false,
            browser_native_sd_url:
              "https://video-ord5-2.xx.fbcdn.net/v/t42.1790-2/430639237_1552601655523017_2552309181304348957_n.mp4?_nc_cat=110&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjg4NywicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIiwidmlkZW9faWQiOjcwNDM4MjY5ODU1MTMxOX0%3D&_nc_ohc=0SvtGWEdu6wAb5HVFPZ&rl=887&vabr=493&_nc_ht=video-ord5-2.xx&oh=00_AfDMddLWna8LPMO6Y75qk8krwx3FNimd61_oMYvXUR90YA&oe=661859B0",
            browser_native_hd_url:
              "https://video-ord5-2.xx.fbcdn.net/o1/v/t2/f1/m69/GH9ctxlse1gbm94EAFMOR8pkx_wKbmdjAAAF.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=video-ord5-2.xx.fbcdn.net&_nc_cat=104&strext=1&vs=20aba4c4ea2abb0c&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSDljdHhsc2UxZ2JtOTRFQUZNT1I4cGt4X3dLYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dKdTF1Um1UYVBJbV9PTURBREtqZTBNTk5nczZidjRHQUFBRhUCAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJqLop%2FzY7JQaFQIoAkMzGAt2dHNfcHJldmlldxwXQDBMzMzMzM0YIWRhc2hfZ2VuMmh3YmFzaWNfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsKiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50BTEyNzA5EW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNzA0MzgyNjk4NTUxMzE5Em9lbV92aWRlb19hc3NldF9pZBAyMDQ0NDMzODA1OTM2MTI4FW9lbV92aWRlb19yZXNvdXJjZV9pZBA3MzY0MTk3MjI2OTY5NjE3HG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPOTM2MDQ3NDYxMDQ4NTMzDnZ0c19yZXF1ZXN0X2lkACUCHAAlxAEbB4gBcwQxNDg2AmNkCjIwMjQtMDMtMDMDcmNiBTEyNzAwA2FwcBRGYWNlYm9vayBmb3IgQW5kcm9pZAJjdA5GQl9TSE9SVFNfUE9TVBNvcmlnaW5hbF9kdXJhdGlvbl9zBDE2LjMCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=9-4&oh=00_AfAyHsEshprnn11vwUL6hwwe4081bYe43lArmlIZc3u03A&oe=661478C9&_nc_sid=1d576d&_nc_rid=370121774549548&_nc_store_type=1",
            spherical_video_fallback_urls: null,
            is_latency_menu_enabled: false,
            fbls_tier: null,
            is_latency_sensitive_broadcast: false,
            comet_video_player_static_config: "{}",
            comet_video_player_context_sensitive_config: "{}",
            video_player_shaka_performance_logger_init: {
              __typename: "VideoPlayerShakaPerformanceLoggerInit",
              __module_operation_useVideoPlayerShakaPerformanceLoggerRelayImpl_video:
                {
                  __dr: "useVideoPlayerShakaPerformanceLoggerRelayImpl_init$normalization.graphql",
                },
              __module_component_useVideoPlayerShakaPerformanceLoggerRelayImpl_video:
                {
                  __dr: "VideoPlayerShakaPerformanceLogger",
                },
            },
            video_player_shaka_performance_logger_should_sample: false,
            video_player_shaka_performance_logger_init2: {
              __typename: "VideoPlayerShakaPerformanceLoggerInit",
              __module_operation_useVideoPlayerShakaPerformanceLoggerBuilder_video:
                {
                  __dr: "useVideoPlayerShakaPerformanceLoggerBuilder_init$normalization.graphql",
                },
              __module_component_useVideoPlayerShakaPerformanceLoggerBuilder_video:
                {
                  __dr: "VideoPlayerShakaPerformanceLoggerBuilder",
                },
              per_session_sampling_rate: null,
            },
            autoplay_gating_result: "all_page_organic_allowed",
            viewer_autoplay_setting: "default_autoplay",
            can_autoplay: true,
            drm_info:
              '{"video_license_uri_map":{},"graph_api_video_license_uri":null,"fairplay_cert":null,"widevine_cert":"CsECCAMSEBcFuRfMEgSGiwYzOi93KowYgrSCkgUijgIwggEKAoIBAQCZ7Vs7Mn2rXiTvw7YqlbWYUgrVvMs3UD4GRbgU2Ha430BRBEGtjOOtsRu4jE5yWl5KngeVKR1YWEAjp+GvDjipEnk5MAhhC28VjIeMfiG/+/7qd+EBnh5XgeikX0YmPRTmDoBYqGB63OBPrIRXsTeo1nzN6zNwXZg6IftO7L1KEMpHSQykfqpdQ4IY3brxyt4zkvE9b/tkQv0x4b9AsMYE0cS6TJUgpL+X7r1gkpr87vVbuvVk4tDnbNfFXHOggrmWEguDWe3OJHBwgmgNb2fG2CxKxfMTRJCnTuw3r0svAQxZ6ChD4lgvC2ufXbD8Xm7fZPvTCLRxG88SUAGcn1oJAgMBAAE6FGxpY2Vuc2Uud2lkZXZpbmUuY29tEoADrjRzFLWoNSl/JxOI+3u4y1J30kmCPN3R2jC5MzlRHrPMveoEuUS5J8EhNG79verJ1BORfm7BdqEEOEYKUDvBlSubpOTOD8S/wgqYCKqvS/zRnB3PzfV0zKwo0bQQQWz53ogEMBy9szTK/NDUCXhCOmQuVGE98K/PlspKkknYVeQrOnA+8XZ/apvTbWv4K+drvwy6T95Z0qvMdv62Qke4XEMfvKUiZrYZ/DaXlUP8qcu9u/r6DhpV51Wjx7zmVflkb1gquc9wqgi5efhn9joLK3/bNixbxOzVVdhbyqnFk8ODyFfUnaq3fkC3hR3f0kmYgI41sljnXXjqwMoW9wRzBMINk+3k6P8cbxfmJD4/Paj8FwmHDsRfuoI6Jj8M76H3CTsZCZKDJjM3BQQ6Kb2m+bQ0LMjfVDyxoRgvfF//M/EEkPrKWyU2C3YBXpxaBquO4C8A0ujVmGEEqsxN1HX9lu6c5OMm8huDxwWFd7OHMs3avGpr7RP7DUnTikXrh6X0"}',
            p2p_settings: null,
            audio_settings: null,
            captions_settings: null,
            broadcast_low_latency_config: null,
            audio_availability: "AVAILABLE",
            muted_segments: [],
            spherical_video_renderer: null,
            preferred_thumbnail: {
              image: {
                uri: "https://scontent-ord5-2.xx.fbcdn.net/v/t15.5256-10/429379321_856634376219299_7178350454240022578_n.jpg?stp=dst-jpg_s960x960&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9prAbDZJE7wAb4e8JqZ&_nc_ht=scontent-ord5-2.xx&oh=00_AfDutJLRO21MJSI0s91zFfVDTcurMWXDZLt8Mpz4ntx_0Q&oe=66183B50",
              },
              image_preview_payload:
                "ABgqlducfdPb/A47VJbpvyMBO4HTJ7n/AOtVtVHLU8RiuW7dmdLfQybu3+XdHjI+8B3Hr9R+tFWbrCnKDLDr756A0VSMJQT1J5ZMMFH41KXAB2nOBmoHjPmZ65/pU25FGQMHGP8AP9aNDUqOfLHOWb75x7dB+fP0orNuZ3lYrEcKeGbpn29l/nRVxMpTVzZa7jA++v5HP86oTXIlGEztPUnq3t7D+dZ5rQtUVk5AP1FFiOZtFcDA46UU6UAHjjmirsZWP//Z",
              id: "7364198230302850",
            },
            video_imf_data: null,
            original_width: 1080,
            original_height: 1920,
            original_rotation: "NO_ROTATE",
            if_viewer_can_see_pay_to_access_paywall: null,
            comet_video_player_audio_overlay_renderer: null,
            comet_video_player_audio_background_renderer: null,
            comet_video_player_music_sprout_background_renderer: null,
            clip_fallback_cover: null,
            is_clip: false,
            matcha_related_keywords_links: [""],
            is_music_clip: false,
            video_collaborator_page_or_delegate_page: null,
            video_anchor_tag_info: null,
            image: {
              uri: "https://scontent-ord5-2.xx.fbcdn.net/v/t15.5256-10/429379321_856634376219299_7178350454240022578_n.jpg?stp=dst-jpg_p296x100&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9prAbDZJE7wAb4e8JqZ&_nc_ht=scontent-ord5-2.xx&oh=00_AfCrMIqB751rmd271U_9ADIhHLet-U-Lu5SbW0GaNChGQA&oe=66183B50",
            },
            canonical_uri_with_fallback:
              "https://www.facebook.com/61554336557409/videos/beautiful-pearls-pearls-jewelry-fashion-pearl-handmade-earrings-jewellery-neckla/704382698551319/",
          },
        ],
      },
    ],
    likesCount: 8276,
    sharesCount: 265,
    viewsCount: 393166,
    commentsCount: 110,
    hashtag: "gold",
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://178.62.199.143/scrape", {
          url: "https://www.amazon.eg/",
          category: "iphone",
        });
        const data = await res.json();
        setPosts(dummyPost);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setPosts(dummyPost);
        console.log(err);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loading />;

  return (
    <main className="main__page">
      <h1 className="page__title">Posts</h1>
      <div className={styles.posts__list}>
        {posts?.items?.map((post, i) => (
          // post box
          <div key={i} className={styles.post__box}>
            {/* header post */}
            <div className={styles.post__head}>
              <img
                className={styles.user__image}
                src={post?.user?.profilePic}
                alt=""
              />
              <h4 className={styles.user__name}>{post?.user?.name}</h4>
            </div>

            {/* body post */}
            <div className={styles.post__body}>
              <p className={styles.post__text}>{post?.text}</p>
              <span className={styles.date}>
                {dayjs(post?.date).format("D / MMM / YYYY")}
              </span>
            </div>

            {/* Footer */}
            <div className={styles.post__footer}>
              <span>
                <strong>Likes:</strong> 8276
              </span>
              <span>
                <strong>Shares:</strong> 8276
              </span>
              <span>
                <strong>Views:</strong> 8276
              </span>
              <span>
                <strong>Comments:</strong> 8276
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Facebook;
