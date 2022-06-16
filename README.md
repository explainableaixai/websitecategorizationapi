<a href="https://github.com/explainableaixai/websitecategorizationapi/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/explainableaixai/websitecategorizationapi"></a>

# Website Categorization Api

This library supports Website categorization API that can classify texts or URLs into 1000+ categories. The package supports both Ecommerce taxonomy as well as IAB based taxonomy. 

# Use cases

Package is used by a wide variety of companies and use cases. 

These include Ad Exchanges, Demand Side Platforms (DSPs), Supply Side Platforms (SSPs) and Ad Networks. SSP (Supply Side Platform) companies can e.g. use it to identify the advertiser’s category to check its eligibility for real-time bidding. 

Other use cases include Web Content Filtering where a company can employ it to filter out non-work related websites, such as social media networks, shopping platforms and similar. 

[Our API](https://www.websitecategorizationapi.com) is based on a machine learning model from text classification group of ML models. It has been extensively tested and used in large scale classification, including on a project with 30+ million texts. 

It is continuously developed and regularly updated (in terms of training data set) to reflect and include new verticals arising each year. 

# UI Dashboard

API can also be used in form of dashboard UI, as seen here: 

![image](https://user-images.githubusercontent.com/58834207/171235279-f5c67b23-46be-4474-be5a-fd7d859ab16d.png)

# Form of json

Added below is the output of json with results of classifier from IAB1 classifier on example domain: 
```
{
  "classification": [
    {
      "category": "Style & Fashion",
      "value": 0.6335134346543948
    },
    {
      "category": "Religion & Spirituality",
      "value": 0.31965677636420087
    },
    {
      "category": "Events and Attractions",
      "value": 0.028203161466589827
    },
    {
      "category": "Pop Culture",
      "value": 0.008486557302356994
    },
    {
      "category": "Books and Literature",
      "value": 0.0028975322143729425
    },
    {
      "category": "Shopping",
      "value": 0.0014989265842864407
    },
    {
      "category": "Fine Art",
      "value": 0.0014698938766846063
    },
    {
      "category": "Family and Relationships",
      "value": 0.0008695569530150543
    },
    {
      "category": "Hobbies & Interests",
      "value": 0.0007021051093678122
    },
    {
      "category": "Travel",
      "value": 0.00045551400716377827
    },
    {
      "category": "Movies",
      "value": 0.0003105774008160576
    },
    {
      "category": "Television",
      "value": 0.0002812439624312471
    },
    {
      "category": "Healthy Living",
      "value": 0.00027001968240167887
    },
    {
      "category": "Careers",
      "value": 0.0002666186301324818
    },
    {
      "category": "Food & Drink",
      "value": 0.0002460227720972317
    },
    {
      "category": "Home & Garden",
      "value": 0.00021331353597162862
    },
    {
      "category": "Medical Health",
      "value": 0.00018344636503169902
    },
    {
      "category": "Music and Audio",
      "value": 0.00007348860474246987
    },
    {
      "category": "Video Gaming",
      "value": 0.00006822010822593386
    },
    {
      "category": "Real Estate",
      "value": 0.00006517844821148466
    },
    {
      "category": "Pets",
      "value": 0.00006069812911973799
    },
    {
      "category": "Education",
      "value": 0.00004860296854985923
    },
    {
      "category": "News and Politics",
      "value": 0.000035123587801619264
    },
    {
      "category": "Sports",
      "value": 0.00003402965849228489
    },
    {
      "category": "Science",
      "value": 0.000026461875107857055
    },
    {
      "category": "Automotive",
      "value": 0.000024825949895016523
    },
    {
      "category": "Personal Finance",
      "value": 0.00001581204114251354
    },
    {
      "category": "Technology & Computing",
      "value": 0.000015037047929356491
    },
    {
      "category": "Business and Finance",
      "value": 0.000007820699466562138
    }
  ],
  "language": "en"
}
```





