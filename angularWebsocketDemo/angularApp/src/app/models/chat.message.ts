export class ChatMessage {
    id: string | undefined;
    userId: string;
    username: string | undefined;
    timestamp: number | undefined;
    type: string | undefined;
    user_profile_img?: string;
    edited: boolean | undefined;
    content: string | undefined;
}
  