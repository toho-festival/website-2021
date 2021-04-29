export type Slide = {
    title: string,
    date1: string,
    date2: string,
    date3: string,
}

export const entrance: Slide[] = [
    {title: 'TOHOFES 70th', date1: '６月５日（土曜日）', date2: '６月６日（日曜日）', date3: '６月７日（月曜日）',}
]

export type ContentInfo = {
    title: string
    detail: string
}

export type ContentInfoLong = {
    title: string
    detail1: string
    detail2: string
}
export const info1: ContentInfoLong[] = [
    {title:'体験型企画', detail1:'体験で刻み込む、' ,detail2:'桐朋祭の思い出',}
]
export const info2: ContentInfo[] = [
    {title:'展示企画', detail:'個性の爆発',}
]    
export const info3: ContentInfoLong[] = [
    {title:'音楽企画',  detail1:'桐朋生の奏でる' ,detail2:'最高のMUSIC',}
]
export const info4: ContentInfoLong[] = [
    {title:'委員長挨拶', detail1:'委員長たちの', detail2:'面白い挨拶'}
]
export const info5: ContentInfo[] = [
    {title:'開催日時', detail:'最高の３日間',}
]
export const info6: ContentInfo[] = [
    {title:'最新情報', detail:'随時更新中！',}
]
export const info7: ContentInfo[] = [
    {title:'プログラム', detail:'こだわりの１冊',}
]
export const info8: ContentInfo[] = [
    {title:'アクセス', detail:'僕らの学び舎',}
]
export const info9: ContentInfo[] = [
    {title:'コロナ対策', detail:'感染症への配慮',}
]
export const info10: ContentInfo[] = [
    {title:'ブログ', detail:'事前の準備などを配信',}
]
