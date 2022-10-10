<template lang="pug">
.verification
    .verification-body
        .verification-header Consent to the processing of personal data
        .horizontal-divider
        .verification-title In simple words:
        .horizontal-divider
        ul
            li In order to use the services, you need to complete an identity verification process, as part of this process, your facial biometrics and personal data from your government-issued ID will be captured by the camera and processed for authentication.
            li UAB "Ondato" acts as a data processor and stores personal data no longer than is required by the company whose services you want to use.
            li If you have any questions about how Ondato or YourLines, please contact support@yourlines.com or see the YourLines Privacy Policy.
        .horizontal-divider
        .verification-title Legal version:
        .horizontal-divider
        .verification-subtitle Required data
        .verification-text Please note that we use Ondato Facial Recognition Identity Services to authenticate you and your government-issued ID. In order to receive the service from YourLines, by clicking "[I agree]", I agree that Ondato will receive and manage my personal data, including my biometric data obtained from the remote verification of my identity by filming and/or live filming . an image of my face, an identity card of my face or a document used to identify it and / or their image and the personal data contained therein and / or verification in the population register: an image of my face, name, surname, nationality, gender, personal data code, date of birth, number of the document used, date of issue and expiry date, my signature and transfer of such data to YourLines.
        .horizontal-divider
        .verification-subtitle Data processing
        .verification-text I am aware that Ondato is acting as a data processor on behalf of YourLines and my personal data, including my biometric data, will be processed by Ondato until the remote identity verification process is completed and the results are shared with YourLines. YourLines does not receive any facial biometric information generated from images, and our third party service providers are contractually limited to processing this information on our behalf and are required to promptly destroy images and any biometric information in accordance with the data retention schedule and the YourLines Instructions set out in section " Storage of personal data" above.
        .horizontal-divider
        .verification-subtitle Data processing
        .verification-text I am aware that I can submit a request for information about my personal data by contacting support@YourLines.com.
        .horizontal-divider
        .verification-text I represent and certify that all personal information that I provide for remote identity verification is correct and accurate and that any government documents that I use for this purpose are genuine, valid and provided to verify my identity.
        .horizontal-divider
        .horizontal-divider
        .verification-buttons
            .verification-button-dis I disagree
            .vertical-divider
            .verification-button-agr I agree
    modal-help    

</template>
<script>
export default {
  mounted() {
    document.body.classList.add('scroll')
  },
  unmounted() {
    document.body.classList.remove('scroll')
  }
}
</script>
<style lang="scss" scoped>
.verification {
    display: flex;
    justify-content: center;
    padding: 32px;
    width: 100vw;
    background-color: #f2f2f2;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
    .verification-body {
        max-width: 960px;
        padding: 48px;
        background-color: #fdfdfd;
        border-radius: 16px;
        box-shadow: 0 .5rem 1rem #f2f2f2;
        .verification-header {
            font-size: 24px;
            font-weight: 700;
            opacity: 0.7;
        }
        .verification-title {
            font-size: 18px;
            font-weight: 600;
        }
        .verification-subtitle {
            font-weight: 500;
        }
        .verification-buttons {
            display: flex;
            justify-content: center;
            width: 100%;
            .verification-button-dis {
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #a0b9f1;
                border-radius: 1000px;
                width: 180px;
                height: 48px;
                cursor: pointer;
                font-size: 18px;
                color: #a0b9f1;
                transition: all 200ms ease;
                &:hover {
                    border: 1px solid  #7a92ef;
                    color: #7a92ef;
                }
                &:active {
                    transform: scale(0.975);
                }
                &.toolbar-active {
                    background-color: #f2f2f2;
                    color: rgba(0, 0, 0, 0.9);
                }
            }
            .verification-button-agr {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #a0b9f1;
                border-radius: 1000px;
                width: 180px;
                height: 48px;
                cursor: pointer;
                font-size: 18px;
                color: #fdfdfd;
                transition: all 200ms ease;
                &:hover {
                    background-color: #7a92ef;
                }
                &:active {
                    transform: scale(0.975);
                }
                &.toolbar-active {
                    background-color: #f2f2f2;
                    color: rgba(0, 0, 0, 0.9);
                }
            }
        }
    }
}
</style>