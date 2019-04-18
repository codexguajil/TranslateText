import React, { Component } from 'react'

export default class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      languages: [
        {language: 'Afrikaans', id: 'af'},
        {language: 'Albanian',	id: 'sq'},
        {language: 'Amharic',	id: 'am'},
        {language: 'Arabic',	id: 'ar'},
        {language: 'Armenian',	id: 'hy'},
        {language: 'Azerbaijani',	id: 'az'},
        {language: 'Basque',	id: 'eu'},
        {language: 'Belarusian',	id: 'be'},
        {language: 'Bengali',	id: 'bn'},
        {language: 'Bosnian',	id: 'bs'},
        {language: 'Bulgarian',	id: 'bg'},
        {language: 'Catalan',	id: 'ca'},
        {language: 'Cebuano',	id: 'ceb' },
        {language: 'Chinese (Simplified)',	id: 'zh-CN'},
        {language: 'Chinese (Traditional)',	id: 'zh-TW'},
        {language: 'Corsican',	id: 'co'},
        {language: 'Croatian',	id: 'hr'},
        {language: 'Czech',	id: 'cs'},
        {language: 'Danish',	id: 'da'},
        {language: 'Dutch',	id: 'nl'},
        {language: 'English',	id: 'en'},
        {language: 'Esperanto',	id: 'eo'},
        {language: 'Estonian',	id: 'et'},
        {language: 'Finnish',	id: 'fi'},
        {language: 'French',	id: 'fr'},
        {language: 'Frisian',	id: 'fy'},
        {language: 'Galician',	id: 'gl'},
        {language: 'Georgian',	id: 'ka'},
        {language: 'German',	id: 'de'},
        {language: 'Greek',	id: 'el'},
        {language: 'Gujarati',	id: 'gu'},
        {language: 'Haitian Creole',	id: 'ht'},
        {language: 'Hausa',	id: 'ha'},
        {language: 'Hawaiian',	id: 'haw'},
        {language: 'Hebrew',	id: 'he**'},
        {language: 'Hindi',	id: 'hi'},
        {language: 'Hmong',	id: 'hmn'},
        {language: 'Hungarian',	id: 'hu'},
        {language: 'Icelandic',	id: 'is'},
        {language: 'Igbo',	id: 'ig'},
        {language: 'Indonesian',	id: 'id'},
        {language: 'Irish',	id: 'ga'},
        {language: 'Italian',	id: 'it'},
        {language: 'Japanese',	id: 'ja'},
        {language: 'Javanese',	id: 'jw'},
        {language: 'Kannada',	id: 'kn'},
        {language: 'Kazakh',	id: 'kk'},
        {language: 'Khmer',	id: 'km'},
        {language: 'Korean',	id: 'ko'},
        {language: 'Kurdish',	id: 'ku'},
        {language: 'Kyrgyz',	id: 'ky'},
        {language: 'Lao',	id: 'lo'},
        {language: 'Latin',	id: 'la'},
        {language: 'Latvian',	id: 'lv'},
        {language: 'Lithuanian',	id: 'lt'},
        {language: 'Luxembourgish',	id: 'lb'},
        {language: 'Macedonian',	id: 'mk'},
        {language: 'Malagasy',	id: 'mg'},
        {language: 'Malay',	id: 'ms'},
        {language: 'Malayalam',	id: 'ml'},
        {language: 'Maltese',	id: 'mt'},
        {language: 'Maori',	id: 'mi'},
        {language: 'Marathi',	id: 'mr'},
        {language: 'Mongolian',	id: 'mn'},
        {language: 'Myanmar (Burmese)',	id: 'my'},
        {language: 'Nepali',	id: 'ne'},
        {language: 'Norwegian',	id: 'no'},
        {language: 'Nyanja (Chichewa)',	id: 'ny'},
        {language: 'Pashto',	id: 'ps'},
        {language: 'Persian',	id: 'fa'},
        {language: 'Polish',	id: 'pl'},
        {language: 'Portuguese (Portugal, Brazil)',	id: 'pt'},
        {language: 'Punjabi',	id: 'pa'},
        {language: 'Romanian',	id: 'ro'},
        {language: 'Russian',	id: 'ru'},
        {language: 'Samoan',	id: 'sm'},
        {language: 'Scots Gaelic',	id: 'gd'},
        {language: 'Serbian',	id: 'sr'},
        {language: 'Sesotho',	id: 'st'},
        {language: 'Shona',	id: 'sn'},
        {language: 'Sindhi',	id: 'sd'},
        {language: 'Sinhala (Sinhalese)',	id: 'si'},
        {language: 'Slovak',	id: 'sk'},
        {language: 'Slovenian',	id: 'sl'},
        {language: 'Somali',	id: 'so'},
        {language: 'Spanish',	id: 'es'},
        {language: 'Sundanese',	id: 'su'},
        {language: 'Swahili',	id: 'sw'},
        {language: 'Swedish',	id: 'sv'},
        {language: 'Tagalog (Filipino)',	id: 'tl'},
        {language: 'Tajik',	id: 'tg'},
        {language: 'Tamil',	id: 'ta'},
        {language: 'Telugu',	id: 'te'},
        {language: 'Thai',	id: 'th'},
        {language: 'Turkish',	id: 'tr'},
        {language: 'Ukrainian',	id: 'uk'},
        {language: 'Urdu', id: 'ur'},
        {language: 'Uzbek',	id: 'uz'},
        {language: 'Vietnamese',	id: 'vi'},
        {language: 'Welsh',	id: 'cy'},
        {language: 'Xhosa',	id: 'xh'},
        {language: 'Yiddish',	id: 'yi'},
        {language: 'Yoruba',	id: 'yo'},
        {language: 'Zulu',	id: 'zu'},
      ]
    }
  }

  handleClick = (id) => {
    this.props.handleLang(id)
  }

  toggleLang = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const { open, languages } = this.state
    return (
      <div className="dd-wrapper">
      <div className="dd-header" onClick={() => this.toggleLang()}>
        <div className="dd-header-title">Languages</div>
      </div>
        { open &&
          <ul className="dd-list">
            { languages.map(item => (<li key={item.id} className="dd-item" onClick={() => this.handleClick(item.id)}>{item.language}</li>))}
          </ul>
        }
      </div>
    )
  }
}