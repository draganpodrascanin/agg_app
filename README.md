# Auto Gas Gaga WebApp

## Opis

Business websajt i aplikacija za poslovne potrebe Auto Gas Gaga doo.

- Business Website
- API
- Blog
- E Servisna Knjižica
- Dashboard
  - Pregled Profit / Troškovi
  - Registracija Klijenta
  - Registracija Automobila
    - Servisi
    - Napomene
    - Garancije
  - Servisni Nalozi
    - Prijem Vozila
    - Pregled Vozila
    - Pregled Vozila
    - Radni Nalozi
    - Zaključak Poslova
  - Zazivanje Termina
  - Pravljenje i Štampanje Faktura
  - Prijem Poruka
  - Blog
    - Pisanje / Edit Bloga
    - Objave
  - Admin Panel
    - Kontola Administatora

### Tech

- Node
- Express
- Typescript
- MySQL
  - TypeORM
- Socket.IO
- PUG - Website
- Vanila Javascript - Website
- SASS - Website
- Webpack
- React - Dashboard
  - Redux
  - Redux Saga
  - Material UI

# API endpoints

## CREATE CAR

Registrovanje novog automobila

**URL** : `/api/v1/cars/`

**Method** : `POST`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

registration: **string** - _required_ <br>
carBrand: **string** - _required_ <br>
carModel: **string** - _required_ <br>
productionYear: **string** - _required_ <br>
engine: **string** - _required_ <br>

```json
//Body Example

{
  "registration": "A12-T-89B",
  "carBrand": "BMW",
  "carModel": "Series 3",
  "productionYear": "2016",
  "engine": "6cil 2000cc"
}
```

### Response:

**status** `201`

```json
//response object example
{
  "status": "success",
  "data": {
    "carBrand": "BMW",
    "carModel": "Series 3",
    "registration": "A12-T-89B",
    "productionYear": "2016",
    "engine": "6cil 2000cc",
    "userId": null,
    "id": "629e6fce-bade-4702-80c4-efc658ef3b1d",
    "createdAt": "2021-02-18T20:23:44.277Z",
    "updatedAt": "2021-02-18T20:23:44.277Z"
  }
}
```

## GET CARS

zahtev za automobile

**URL** : `/api/v1/users/`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Query Strings

**page** - broj stranice<br>
**limit** - ograniči broj automobila po stranici<br>
**search** - filtriraj gde se search sadrži u _registration_, _carBrand_, _carModel_ automobila

### Response:

**status** `200`

```json
//response object example
{
    "status": "success",
    "results": 2,
    "count": 200,
    "data": [
        {
            "id": "629e6fce-bade-4702-80c4-efc658ef3b1d",
            "carBrand": "BMW",
            "carModel": "Series 3",
            "registration": "A12-T-89B",
            "productionYear": 2016,
            "engine": "6cil 2000cc",
            "createdAt": "2021-02-18T20:23:44.277Z",
            "updatedAt": "2021-02-18T20:23:44.277Z",
            "userId": null,
            "user": null
        },
        {
            "id": "228faec6-7261-4a07-9099-ee6fcbcad0e1",
            "carBrand": "DMT",
            "carModel": "3002",
            "registration": "T12-M-342",
            "productionYear": 2021,
            "engine": "Ajavaska v12 4000cc",
            "createdAt": "2021-02-13T19:38:54.021Z",
            "updatedAt": "2021-02-13T19:38:54.000Z",
            "userId": "0229fcf0-b4d0-479d-bbdf-b5471676f669",
            "user": {...}
        }
    ]
}
```

## GET CAR

Zahtev za jedan Automobil

**URL** : `/api/v1/cars/:id`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "629e6fce-bade-4702-80c4-efc658ef3b1d",
    "carBrand": "BMW",
    "carModel": "Series 3",
    "registration": "A12-T-89B",
    "productionYear": 2016,
    "engine": "6cil 2000cc",
    "createdAt": "2021-02-18T20:23:44.277Z",
    "updatedAt": "2021-02-18T20:23:44.277Z",
    "userId": null,
    "user": null
  }
}
```

## EDIT CAR

Napravi izmene na automobilu Automobil

**URL** : `/api/v1/cars/:id`

**Method** : `PATCH`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

registration: **string** - _required_ <br>
carBrand: **string** - _required_ <br>
carModel: **string** - _required_ <br>
productionYear: **string** - _required_ <br>
engine: **string** - _required_ <br>

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "629e6fce-bade-4702-80c4-efc658ef3b1d",
    "carBrand": "BMW",
    "carModel": "Series 3",
    "registration": "A12-T-89B",
    "productionYear": 2016,
    "engine": "6cil 2000cc",
    "createdAt": "2021-02-18T20:23:44.277Z",
    "updatedAt": "2021-02-18T20:23:44.277Z",
    "userId": null,
    "user": null
  }
}
```

## SET CAR OWNERSHIP

Napravi relation user-car

**URL** : `/api/v1/cars/:id/setOwner`

**Method** : `PATCH`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

userId: **string** - _required_ <br>

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "629e6fce-bade-4702-80c4-efc658ef3b1d",
    "carBrand": "BMW",
    "carModel": "Series 3",
    "registration": "A12-T-89B",
    "productionYear": 2016,
    "engine": "6cil 2000cc",
    "createdAt": "2021-02-18T20:23:44.277Z",
    "updatedAt": "2021-02-18T20:23:44.277Z",
    "userId": "0229fcf0-b4d0-479d-bbdf-b5471676f669",
    "user": {...}
  }
}
```

## GET WARRANTIES

Zahtev za garancije

**URL** : `/api/v1/users/`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Response:

**status** `200`

```json
{
  "status": "success",
  "results": 2,
  "data": [
    {
      "id": "6acb0568-f2cb-44ac-a028-0a9f9e5626a0",
      "partsUnderWarranty": "Dizne ",
      "validUntil": "2022-01-14T00:00:00.000Z",
      "createdAt": "2021-01-14T18:23:15.201Z",
      "updatedAt": "2021-01-14T20:28:04.000Z",
      "carId": "6b936bac-832f-466c-97d4-db34a0c5471f",
      "warrantyConditionsId": "82d497b2-02c2-43a6-ba29-5013d92d063c"
    },
    {
      "id": "79b0f5da-bbb3-45c4-bd2a-0db219193b0b",
      "partsUnderWarranty": "Lonac",
      "validUntil": "2023-02-17T00:00:00.000Z",
      "createdAt": "2021-02-17T00:27:20.937Z",
      "updatedAt": "2021-02-17T00:27:20.937Z",
      "carId": "5a76944d-86e3-416d-a130-609d33af3970",
      "warrantyConditionsId": "82d497b2-02c2-43a6-ba29-5013d92d063c"
    }
  ]
}
```

## CREATE WARRANTY

Napravi novu garanciju

**URL** : `/api/v1/cars/`

**Method** : `POST`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

carId: **string** - _required_ <br>
partsUnderWarranty: **string** - _required_ <br>
validUntil: **date** - _required_ <br>

```json
//Body Example

{
  "carId": "228faec6-7261-4a07-9099-ee6fcbcad0e1",
  "partUnderWarranty": "Dizne",
  "validUntil": "2021/08/08"
}
```

### Response:

**status** `201`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "79b0f5da-bbb3-45c4-bd2a-0db219193b0b",
    "partsUnderWarranty": "Lonac",
    "validUntil": "2023-02-17T00:00:00.000Z",
    "createdAt": "2021-02-17T00:27:20.937Z",
    "updatedAt": "2021-02-17T00:27:20.937Z",
    "carId": "228faec6-7261-4a07-9099-ee6fcbcad0e1",
    "warrantyConditionsId": "82d497b2-02c2-43a6-ba29-5013d92d063c"
  }
}
```

## EDIT WARRANTY

Napravi novu garanciju

**URL** : `/api/v1/cars/`

**Method** : `PATCH`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

partsUnderWarranty: **string** - _required_ <br>
validUntil: **date** - _required_ <br>

```json
//Body Example

{
  "partUnderWarranty": "Dizne",
  "validUntil": "2021/09/08"
}
```

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "79b0f5da-bbb3-45c4-bd2a-0db219193b0b",
    "partsUnderWarranty": "Lonac",
    "validUntil": "2023-02-17T00:00:00.000Z",
    "createdAt": "2021-02-17T00:27:20.937Z",
    "updatedAt": "2021-02-17T00:27:20.937Z",
    "carId": "228faec6-7261-4a07-9099-ee6fcbcad0e1",
    "warrantyConditionsId": "82d497b2-02c2-43a6-ba29-5013d92d063c"
  }
}
```

## CREATE APPPOINTMENT

Zakaži termin

**URL** : `/api/v1/appointments/`

**Method** : `POST`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

car: **string** - _required_ <br>
name: **string** - _required_ <br>
note: **string** - _required_ <br>
phoneNumber: **string** - _required_ <br>
datetime: **date** - _required_ <br>

```json
//Body Example

{
  "car": "Audi A4",
  "name": "Dragan Mirkovic",
  "note": "Ugradnja LPG sistema",
  "phoneNumber": "0631480440",
  "datetime": "2021-04-07T12:23:00"
}
```

### Response:

**status** `201`

```json
//response object example
{
  "status": "success",
  "data": {
    "car": "Audi A4",
    "name": "Dragan Mirkovic",
    "note": "Ugradnja LPG sistema",
    "phoneNumber": "0631480440",
    "datetime": "2021-04-07T12:23:00",
    "showedUp": null,
    "id": "6c829807-f5d9-43ed-8436-b4e4fc5fb2d8",
    "createdAt": "2021-02-18T21:04:31.311Z",
    "updatedAt": "2021-02-18T21:04:31.311Z"
  }
}
```

## GET APPOINTMENTS

zahtev za zakazane termine

**URL** : `/api/v1/appointments/`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Query Strings

**dateFrom** - Datuma od<br>
**dateTo** - Datuma do<br>

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
  "results": 2,
  "count": 200,
  "data": [
    {
      "id": "0bd90777-18d0-4c53-83b4-00f5616949ca",
      "name": "Dragan Markovic 2",
      "car": "audi a4",
      "note": "besplatni pregled",
      "showedUp": null,
      "phoneNumber": "0631480440",
      "datetime": "2021-01-08T11:50:00.000Z",
      "createdAt": "2021-01-07T22:11:06.338Z",
      "updatedAt": "2021-01-08T16:18:10.000Z"
    },
    {
      "id": "1a9b1fb2-cfc9-4f5e-a328-59995a04ace7",
      "name": "Vladimir Vladimirović",
      "car": "ALFA ROMEO 156",
      "note": "Ugradnja LPG sistema.",
      "showedUp": true,
      "phoneNumber": "+381631480440",
      "datetime": "2021-01-12T11:00:00.000Z",
      "createdAt": "2021-01-08T18:36:30.545Z",
      "updatedAt": "2021-01-08T18:36:47.000Z"
    }
  ]
}
```

## CREATE WORK ORDER

Otvori novi servisni nalog

**URL** : `/api/v1/workOrders/`

**Method** : `POST`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

carRegistration: **string** - _required_ <br>

```json
//Body Example

{
  "carRegistration": "T12-B-A89"
}
```

### Response:

**status** `200`

```json
//response object example
{
    "status": "success",
    "data": {
        "carId": "629e6fce-bade-4702-80c4-efc658ef3b1d",
        "car": {...},
        "carReceptionId": null,
        "carExamId": null,
        "jobConclusionId": null,
        "id": "ce10ba41-8e76-4362-b72b-b7996d7e441a",
        "completed": false,
        "createdAt": "2021-02-18T21:12:47.464Z",
        "updatedAt": "2021-02-18T21:12:47.464Z"
    }
}
```

## GET WORK ORDERS

Uzmi stranicu servisnih naloga

zahtev za zakazane termine

**URL** : `/api/v1/workOrders/`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Query Strings

**page** - broj stranice<br>
**limit** - ograniči broj servisnih naloga po stranici<br>

### Response:

**status** `200`

```json
//response object example
"status": "success",
    "results": 2,
    "count": 200,
    "data": [
        {
            "id": "ce10ba41-8e76-4362-b72b-b7996d7e441a",
            "completed": false,
            "createdAt": "2021-02-18T21:12:47.464Z",
            "updatedAt": "2021-02-18T21:12:47.464Z",
            "carReceptionId": null,
            "carExamId": null,
            "jobConclusionId": null,
            "carId": "629e6fce-bade-4702-80c4-efc658ef3b1d",
            "car": {...},
            "carReception": null,
            "carExam": null,
            "jobTickets": [],
            "jobConclusion": null
        },
        {
            "id": "05348900-dbe8-4633-8b1b-913a36dfad20",
            "completed": false,
            "createdAt": "2021-02-16T22:49:21.860Z",
            "updatedAt": "2021-02-16T23:08:16.000Z",
            "carReceptionId": "d562efdc-0bf3-4c68-882b-880430a7163e",
            "carExamId": "579cb610-bdcd-4158-bfd1-897b3f160707",
            "jobConclusionId": null,
            "carId": "5a76944d-86e3-416d-a130-609d33af3970",
            "car": {...},
            "carReception": {...},
            "carExam": {...},
            "jobTickets": [...],
            "jobConclusion": null
        }
    ]
}
```

## COMPLETE WORK ORDER

Zaključi servisni nalog

**URL** : `/api/v1/workOrders/:id/complete`

**Method** : `PATCH`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "629e6fce-bade-4702-80c4-efc658ef3b1d",
    "carBrand": "BMW",
    "carModel": "Series 3",
    "registration": "A12-T-89B",
    "productionYear": 2016,
    "engine": "6cil 2000cc",
    "createdAt": "2021-02-18T20:23:44.277Z",
    "updatedAt": "2021-02-18T20:23:44.277Z",
    "userId": null,
    "user": null
  }
}
```

## CREATE CAR RECEPTION

Napravi prijem automobila

**URL** : `/api/v1/carReceptions/`

**Method** : `POST`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

workOrderId: **string** - _required_ <br>
ownerRemarks: **string** - _required_ <br>
carDamage: **string** - _required_ <br>
milage: **int** - _required_ <br>

```json
//Body Example

{
  "workOrderId": "d6d19c6f-38c6-48f9-9431-0e5aba753896",
  "ownerRemarks": "Tesko pali. Štuca pri voznji.",
  "carDamage": "Ostecen levi retrovizor.",
  "milage": 248988
}
```

### Response:

**status** `200`

```json
//response object example
{
    "status": "success",
    "data": {
        "ownerRemarks": "Tesko pali. Štuca pri voznji.",
        "carDamage": "Ostecen levi retrovizor.",
        "milage": 248988,
        "adminRecived": "Dragan Podraščanin",
        "workOrder": {...},
        "workOrderId": null,
        "id": "8cb2ea10-5fdc-41b3-b309-41061ee21b8b",
        "createdAt": "2021-02-18T21:32:09.944Z",
        "updatedAt": "2021-02-18T21:32:09.944Z"
    }
}
```

## EDIT CAR RECEPTION

Izmeni prijem automobila

**URL** : `/api/v1/carReceptions/:id`

**Method** : `PATCH`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

workOrderId: **string** - _required_ <br>
ownerRemarks: **string** - _required_ <br>
carDamage: **string** - _required_ <br>
milage: **int** - _required_ <br>

```json
//Body Example

{
  "workOrderId": "d6d19c6f-38c6-48f9-9431-0e5aba753896",
  "ownerRemarks": "Tesko pali. Štuca pri voznji.",
  "carDamage": "Ostecen levi retrovizor.",
  "milage": 248988
}
```

### Response:

**status** `200`

```json
//response object example
{
    "status": "success",
    "data": {
        "ownerRemarks": "Tesko pali. Štuca pri voznji.",
        "carDamage": "Ostecen levi retrovizor.",
        "milage": 248988,
        "adminRecived": "Dragan Podraščanin",
        "workOrder": {...},
        "workOrderId": null,
        "id": "8cb2ea10-5fdc-41b3-b309-41061ee21b8b",
        "createdAt": "2021-02-18T21:32:09.944Z",
        "updatedAt": "2021-02-18T21:32:09.944Z"
    }
}
```

## GET CAR RECEPTIONS

Uzmi stranicu servisnih naloga

zahtev za zakazane termine

**URL** : `/api/v1/carReceptions/`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Query Strings

**page** - broj stranice<br>
**limit** - ograniči broj prijema automobila po stranici<br>

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
    "results": 2,
    "count": 200,
    "data": [
      {
        "ownerRemarks": "Zvoni auspuh",
        "carDamage": "-",
        "milage": 124400,
        "adminRecived": "Dragan Podraščanin",
        "workOrder": {...},
        "workOrderId": null,
        "id": "8cb2ea10-5fdc-41b3-b309-41061ee21b8b",
        "createdAt": "2021-02-18T21:32:09.944Z",
        "updatedAt": "2021-02-18T21:32:09.944Z"
    },
        {
        "ownerRemarks": "Tesko pali. Štuca pri voznji.",
        "carDamage": "Ostecen levi retrovizor.",
        "milage": 248988,
        "adminRecived": "Dragan Podraščanin",
        "workOrder": {...},
        "workOrderId": null,
        "id": "8cb2ea10-5fdc-41b3-b309-41061ee21b8b",
        "createdAt": "2021-02-18T21:32:09.944Z",
        "updatedAt": "2021-02-18T21:32:09.944Z"
    }
    ]
}
```

## CREATE CAR EXAM

**URL** : `/api/v1/carExam/`

**Method** : `POST`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

workOrderId: **string** - _required_ <br>
examConclusion: **string** - _required_ <br>

```json
//Body Example

{
  "workOrderId": "d6d19c6f-38c6-48f9-9431-0e5aba753896",
  "examConclusion": "Neispravne svećice."
}
```

### Response:

**status** `200`

```json
//response object example
{
    "status": "success",
    "data": {
        "examConclusion": "Neispravne svećice.",
        "workOrder": {...},
        "id": "466e5612-e0c0-4085-a7b2-19b550cbb27c",
        "createdAt": "2021-02-19T14:34:15.291Z",
        "updatedAt": "2021-02-19T14:34:15.291Z"
    }
}
```

## GET CAR EXAMS

Uzmi stranicu pregleda automobila

**URL** : `/api/v1/carExams/`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Query Strings

**page** - broj stranice<br>
**limit** - ograniči broj pregleda po stranici<br>

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
  "results": 2,
  "data": [
    {
      "id": "31f70108-b810-45ab-a3ea-1b7d5ae67cba",
      "examConclusion": "Oštećen lonac.",
      "createdAt": "2021-02-16T21:49:30.742Z",
      "updatedAt": "2021-02-16T21:49:30.742Z"
    },
    {
      "id": "36fe36e7-91fb-49df-8090-a9796002c9f8",
      "examConclusion": "Pokvaren je.",
      "createdAt": "2021-02-16T00:43:22.819Z",
      "updatedAt": "2021-02-16T00:43:22.819Z"
    }
  ]
}
```

## EDIT CAR EXAM

izmeni pregled

**URL** : `/api/v1/carExam/:id`

**Method** : `PATCH`

**Auth required** : YES

**Authorization** : admin / super-admin

### Request Body Params

examConclusion: **string**

```json
//Body Example

{
  "examConclusion": "Neispravne bobine."
}
```

### Response:

**status** `200`

```json
//response object example
{
    "status": "success",
    "data": {
        "examConclusion": "Neispravne bobine.",
        "workOrder": {...},
        "id": "466e5612-e0c0-4085-a7b2-19b550cbb27c",
        "createdAt": "2021-02-19T14:34:15.291Z",
        "updatedAt": "2021-02-19T14:40:15.291Z"
    }
}
```

## DELETE CAR EXAM

Obriši pregled

**URL** : `/api/v1/carExam/:id`

**Method** : `DELETE`

**Auth required** : YES

**Authorization** : admin / super-admin

### Request Body Params

none

### Response:

**status** `200`

```json
//response object example
{
  "status": "success"
}
```

## CREATE JOB TICKET

Napravi redni nalog.

**URL** : `/api/v1/jobTicket/`

**Method** : `POST`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

workOrderId: **string** - _required_ <br>
ticket: **string** - _required_ <br>
status: **enum**

status enum options:

- to-do
- waiting-for-parts
- in-progress
- finished

```json
//Body Example

{
  "workOrderId": "d6d19c6f-38c6-48f9-9431-0e5aba753896",
  "ticket": "Promena LPG filtera",
  "status": "finished"
}
```

### Response:

**status** `200`

```json
//response object example
{
    "status": "success",
    "data": {
        "status": "finished",
        "ticket": "Promena LPG filtera",
        "workOrderId": "05348900-dbe8-4633-8b1b-913a36dfad20",
        "workOrder": {...},
        "id": "d1a4e15a-bca9-408b-b450-3747fc9a34b9",
        "createdAt": "2021-02-19T14:49:23.797Z",
        "updatedAt": "2021-02-19T14:49:23.797Z"
    }
}
```

## GET JOB TICKETS

Uzmi stranicu radnih naloga

**URL** : `/api/v1/jobTickets/`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Query Strings

**page** - broj stranice<br>
**limit** - ograniči broj radnih naloga po stranici<br>

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
  "results": 2,
  "data": [
    {
      "id": "1bf9f936-1197-4077-a363-fc6661e550ea",
      "status": "in-progress",
      "ticket": "Reparacija LPG dizni.",
      "createdAt": "2021-02-16T23:08:34.452Z",
      "updatedAt": "2021-02-16T23:08:34.452Z",
      "workOrderId": "05348900-dbe8-4633-8b1b-913a36dfad20"
    },
    {
      "id": "a61a9c86-bc29-40c7-9307-431dcf24a32e",
      "status": "finished",
      "ticket": "Zadatak",
      "createdAt": "2021-01-25T23:57:16.974Z",
      "updatedAt": "2021-02-10T20:52:35.000Z",
      "workOrderId": "f32c3e72-455f-4a7b-b237-09b9f906fdcc"
    }
  ]
}
```

## EDIT JOB TICKET

Izmeni radni nalog

**URL** : `/api/v1/jobTicket/:id`

**Method** : `PATCH`

**Auth required** : YES

**Authorization** : admin / super-admin

### Request Body Params

workOrderId: **string** - _required_ <br>
ticket: **string** - _required_ <br>
status: **enum**

status enum options:

- to-do
- waiting-for-parts
- in-progress
- finished

```json
//Body Example

{
  "ticket": "Atest boce.",
  "status": "finished"
}
```

### Response:

**status** `200`

```json
//response object example
{
    "status": "success",
    "data": {
        "status": "finished",
        "ticket": "Atest boce",
        "workOrderId": "05348900-dbe8-4633-8b1b-913a36dfad20",
        "workOrder": {...},
        "id": "d1a4e15a-bca9-408b-b450-3747fc9a34b9",
        "createdAt": "2021-02-19T14:49:23.797Z",
        "updatedAt": "2021-02-19T14:49:23.797Z"
    }
}
```

## EDIT JOB TICKET STATUS

Izmeni status

**URL** : `/api/v1/jobTicket/:id/status`

**Method** : `PATCH`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

status: **enum**

status enum options:

- to-do
- waiting-for-parts
- in-progress
- finished

```json
//Body Example

{
  "status": "in-progress"
}
```

### Response:

**status** `200`

```json
//response object example
{
    "status": "success",
    "data": {
        "status": "in-progress",
        "ticket": "Atest boce",
        "workOrderId": "05348900-dbe8-4633-8b1b-913a36dfad20",
        "workOrder": {...},
        "id": "d1a4e15a-bca9-408b-b450-3747fc9a34b9",
        "createdAt": "2021-02-19T14:49:23.797Z",
        "updatedAt": "2021-02-19T14:49:23.797Z"
    }
}
```

## CREATE JOB CONCLUSION

Zaključi posao.

**URL** : `/api/v1/jobConclusion/`

**Method** : `POST`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

workOrderId: **string** - _required_ <br>
workDone: **string** - _required_ <br>
charged: **number** - _required_ <br>
note: **string** - _optional_ <br>

```json
{
  "workOrderId": "8de6783d-1389-4de6-877d-f0fcc9667351",
  "note": "Uraditi mali servis u skorije vreme.",
  "workDone": "Promenjen LPG ECU.",
  "charged": 120
}
```

### Response:

**status** `200`

```json
//response object example
{
    "status": "success",
    "data": {
        "workDone": "Promenjen LPG ECU.",
        "note": "Uraditi mali servis u skorije vreme.",
        "charged": 120,
        "workOrder": {...},
        "workOrderId": null,
        "id": "d513d7da-87fa-4bd0-ad4a-433d6d0d3c8a",
        "createdAt": "2021-02-19T15:27:54.081Z",
        "updatedAt": "2021-02-19T15:27:54.081Z"
    }
}
```

## GET JOB CONCLUSIONS

Uzmi zaključene poslove između datuma.

**URL** : `/api/v1/jobConclusions/`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Query Strings

**fromDate** - datumaOd<br>
**toDate** - datumaDo<br>

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
  "results": 2,
  "data": [
    {
      "id": "00186397-f609-4526-ab8b-38e1e1e6997d",
      "workDone": "Open-architected well-modulated access",
      "note": null,
      "charged": 201,
      "createdAt": "2021-02-07T00:00:00.000Z",
      "updatedAt": "2021-02-10T20:40:12.488Z",
      "workOrderId": "..."
    },
    {
      "id": "0080a069-d8e7-4e58-8b74-b772ff638ef9",
      "workDone": "Self-enabling maximized framework",
      "note": "Something to do.",
      "charged": 80,
      "createdAt": "2021-01-12T00:00:00.000Z",
      "updatedAt": "2021-02-10T20:40:12.584Z",
      "workOrderId": "..."
    }
  ]
}
```

## EDIT JOB CONCLUSION

Izmeni zaključen posao.

**URL** : `/api/v1/jobConclusion/:id`

**Method** : `PATCH`

**Auth required** : YES

**Authorization** : admin / super-admin

### Request Body Params

workOrderId: **string** - _optional_ <br>
workDone: **string** - _optional_ <br>
charged: **number** - _optional_ <br>
note: **string** - _optional_ <br>

```json
{
  "workOrderId": "8de6783d-1389-4de6-877d-f0fcc9667351",
  "note": "Uraditi mali servis u skorije vreme.",
  "workDone": "Promenjen LPG ECU.",
  "charged": 120
}
```

### Response:

**status** `200`

```json
//response object example
{
    "status": "success",
    "data": {
        "workDone": "Promenjen LPG ECU.",
        "note": "Uraditi mali servis u skorije vreme.",
        "charged": 120,
        "workOrder": {...},
        "workOrderId": null,
        "id": "d513d7da-87fa-4bd0-ad4a-433d6d0d3c8a",
        "createdAt": "2021-02-19T15:27:54.081Z",
        "updatedAt": "2021-02-19T15:27:54.081Z"
    }
}
```

## DELETE JOB CONCLUSION

Obriši zaključen posao

**URL** : `/api/v1/jobConclusion/:id`

**Method** : `DELETE`

**Auth required** : YES

**Authorization** : admin / super-admin

### Request Body Params

none

### Response:

**status** `202`

```json
//response object example
{
  "status": "success"
}
```

## CREATE IVOICE

Napravi fakturu

**URL** : `/api/v1/invoices/`

**Method** : `POST`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

invoiceTitle: **enum** - _default to račun_ <br>
location: **string** - _required_ <br>
dpo: **date**
valuta: **date**
dueDate: **date**
deliveryDate: **date**
customerName: **string** - _required_ <br>
priceInWriting: **string** - _required_ <br>
invoiceDescs: **InvoiceDesc[]** - _required_ <br>

customerAdress: **string** - _optional_ <br>
customerPostNumberLocation: **string** - _optional_ <br>
customerPhoneNumber: **string** - _optional_ <br>
customerEmail: **string** - _optional_ <br>
customerAdditionalInfo: **string** - _optional_ <br>

invoiceDesc:

- desc: **string**
- pricePerUnit: **number**
- qty: **number**
- tax: **number** (%)
- discount: **number** (%)
- unit: **enum**
  - kom
  - komplet
  - h

invoiceTitle enum:

- Račun
- Predračun

```json
//Body Example

{
  "invoiceTitle": "Račun",
  "location": "Banja Luka",
  "dpo": "2021/11/18",
  "valuta": "2021/11/18",
  "dueDate": "2021/11/18",
  "deliveryDate": "2021/11/11",
  "customerName": "Dragan Podraščanin",
  "customerAdress": "Banja Luka, Njegoševa 44.",
  "customerPostNumberLocation": "78000, Petrićevac",
  "customerPhoneNumber": "065701308",
  "customerEmail": "kupas@email.com",
  "priceInWriting": "Hiljadu KM",
  "invoiceDescs": [
    {
      "desc": "LPG Cijevi",
      "pricePerUnit": 45,
      "qty": 2,
      "tax": 0,
      "discount": 0,
      "unit": "kom"
    },
    {
      "desc": "Radni Sat",
      "pricePerUnit": 25,
      "qty": 3,
      "tax": 17,
      "discount": 0,
      "unit": "kom"
    }
  ]
}
```

### Response:

**status** `201`

```json
//response object example
{
  "status": "success",
  "data": {
    "invoice": {
      "invoiceTitle": "Račun",
      "location": "Banja Luka",
      "dpo": "2021/11/18",
      "valuta": "2021/11/18",
      "invoiceNo": 20,
      "po": "#2021-20",
      "dueDate": "2021/11/18",
      "deliveryDate": "2021/11/11",
      "customerName": "Dragan Podraščanin",
      "customerAdress": "Banja Luka, Njegoševa 44.",
      "customerPostNumberLocation": "78000, Petrićevac",
      "customerPhoneNumber": "065701308",
      "customerEmail": "kupac@email.com",
      "priceInWriting": "Hiljadu KM",
      "customerAdditionalInfo": null,
      "predracunTag": null,
      "pdfName": "Račun2021-20-1613747522693.pdf",
      "id": "d1f9c8e3-38f7-47db-b582-d01b72998a39",
      "createdAt": "2021-02-19T15:12:02.637Z",
      "updatedAt": "2021-02-19T15:12:06.000Z",
      "invoiceDesc": [
        {
          "desc": "LPG Cijevi",
          "qty": 2,
          "pricePerUnit": 45,
          "tax": 0,
          "discount": 0,
          "unit": "kom",
          "preTaxPrice": 90,
          "priceTaxInc": 90,
          "invoiceId": "d1f9c8e3-38f7-47db-b582-d01b72998a39",
          "id": "5dac9b7f-caca-4c1b-94c9-55000c7a8564",
          "createdAt": "2021-02-19T15:12:02.670Z",
          "updatedAt": "2021-02-19T15:12:02.670Z"
        },
        {
          "desc": "Radni Sat",
          "qty": 3,
          "pricePerUnit": 25,
          "tax": 17,
          "discount": 0,
          "unit": "kom",
          "preTaxPrice": 75,
          "priceTaxInc": 87.75,
          "invoiceId": "d1f9c8e3-38f7-47db-b582-d01b72998a39",
          "id": "3f750a2a-a9f4-4c30-98c6-36b990611d0a",
          "createdAt": "2021-02-19T15:12:02.685Z",
          "updatedAt": "2021-02-19T15:12:02.685Z"
        }
      ]
    },
    "pdf": {
      "filename": "Račun2021-20-1613747522693.pdf"
    }
  }
}
```

## GET INVOICES

Uzmi stranicu faktura

**URL** : `/api/v1/invoices/`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Query Strings

**page** - broj stranice<br>
**limit** - ograniči broj faktura po stranici<br>

### Response:

**status** `200`

```json
//response object example
{
    "status": "success",
    "count": 20,
    "results": 2,
    "data": [
        {
            "id": "d1f9c8e3-38f7-47db-b582-d01b72998a39",
            "invoiceTitle": "Račun",
            "location": "Banja Luka",
            "dpo": "2021-11-18",
            "valuta": "2021-11-18",
            "invoiceNo": 20,
            "po": "#2021-20",
            "dueDate": "2021-11-18",
            "deliveryDate": "2021-11-11",
            "customerName": "Dragan Podraščanin",
            "customerAdress": "Njegoševa 44.",
            "customerPostNumberLocation": "78000, Banja Luka",
            "customerPhoneNumber": "065701308",
            "customerEmail": "kupac@email.com",
            "customerAdditionalInfo": null,
            "predracunTag": null,
            "priceInWriting": "Hiljadu",
            "pdfName": "Račun2021-20-1613747522693.pdf",
            "createdAt": "2021-02-19T15:12:02.637Z",
            "updatedAt": "2021-02-19T15:12:06.000Z",
            "invoiceDescs": [...]
        },
        {
            "id": "54a6bf2f-4349-4e7c-9539-cb6164321155",
            "invoiceTitle": "Račun",
            "location": "Banja Luka",
            "dpo": "2021-02-15",
            "valuta": "2021-02-15",
            "invoiceNo": 19,
            "po": "#2021-19",
            "dueDate": "2021-02-15",
            "deliveryDate": "2021-02-15",
            "customerName": "Dragan Podraščanin",
            "customerAdress": "adresa 6.",
            "customerPostNumberLocation": "78000, Banja Luka",
            "customerPhoneNumber": "+381631480440",
            "customerEmail": "draganpodrascanin@gmail.com",
            "customerAdditionalInfo": "",
            "predracunTag": null,
            "priceInWriting": "Šezdeset",
            "pdfName": "Račun2021-19-1613427286659.pdf",
            "createdAt": "2021-02-15T22:14:46.620Z",
            "updatedAt": "2021-02-15T22:14:48.000Z",
            "invoiceDescs": [...]
        }
    ]
}
```

## CREATE BLOG

Kreiraj Blog.

**URL** : `/api/v1/blogs/`

**Method** : `POST`

**Auth required** : YES

**Authorization** : super-admin / blogger

### Request Body Params

title: **string** - _required_ <br>
imageId: **string** - _required_ <br>
imageAlt: **number** - _required_ <br>
thumbnailId: **string** - _required_ <br>
thumbnailAlt: **string** - _required_ <br>
content: **string** - _required_ <br>
synopsis: **string** - _optional_ <br>

```json
// example body
{
  "title": "Kako naći stvari koje nisu na google-u?",
  "synopsis": "Kako naći stvari koje nisu na google-u? Nije lako. Priča kreće davne 1389. kada je gospodin Mrnjavčević krenuo u boj....",
  "imageId": "d739169e-eabb-4559-968d-ca4269da6a19",
  "imageAlt": "generic heading image with title",
  "thumbnailId": "15b5a800-c5c4-4d72-b9d6-d816af390af8",
  "thumbnailAlt": "generic thumbnail with title",
  "content": "<p>Kako naći stvari koje nisu na google-u? Nije lako. Priča kreće davne 1389. kada je gospodin Mrnjavčević Marko krenuo u boj…</p>"
}
```

### Response

**status** `201`

```json
{
  "status": "success",
  "data": {
    "id": "08b1a7ee-65e3-4ba2-b156-48d285e588f8",
    "title": "Kako naći stvari koje nisu na google-u?",
    "published": false,
    "slug": "kako-naći-stvari-koje-nisu-na-google-u",
    "createdAt": "2021-02-15T21:12:55.437Z",
    "imageAlt": "generic image with title",
    "imageId": "15b5a800-c5c4-4d72-b9d6-d816af390af8",
    "image": {...},
    "thumbnailAlt": "generic thumbnail with title",
    "thumbnailId": "15b5a800-c5c4-4d72-b9d6-d816af390af8",
    "thumbnail": {...},
    "synopsis": "Kako naći stvari koje nisu na google-u? Nije lako. Priča kreće davne 1389. kada je gospodin Mrnjavčević Marko krenuo u boj...."
  }
}
```

## EDIT BLOG

Izmeni Blog.

**URL** : `/api/v1/blogs/:id`

**Method** : `PUT`

**Auth required** : YES

**Authorization** : super-admin / blogger

### Request Body Params

title: **string** - _required_ <br>
imageId: **string** - _required_ <br>
imageAlt: **number** - _required_ <br>
thumbnailId: **string** - _required_ <br>
thumbnailAlt: **string** - _required_ <br>
content: **string** - _required_ <br>
synopsis: **string** - _optional_ <br>

```json
// example body
{
  "title": "Kako naći stvari koje nisu na google-u?",
  "synopsis": "Kako naći stvari koje nisu na google-u? Nije lako. Priča kreće davne 1389. kada je gospodin Mrnjavčević krenuo u boj....",
  "imageId": "d739169e-eabb-4559-968d-ca4269da6a19",
  "imageAlt": "generic heading image with title",
  "thumbnailId": "15b5a800-c5c4-4d72-b9d6-d816af390af8",
  "thumbnailAlt": "generic thumbnail with title",
  "content": "<p>Kako naći stvari koje nisu na google-u? Nije lako. Priča kreće davne 1389. kada je gospodin Mrnjavčević Marko krenuo u boj…</p>"
}
```

### Response

**status** `200`

```json
{
  "status": "success",
  "data": {
    "id": "08b1a7ee-65e3-4ba2-b156-48d285e588f8",
    "title": "Kako naći stvari koje nisu na google-u?",
    "published": false,
    "slug": "kako-naći-stvari-koje-nisu-na-google-u",
    "createdAt": "2021-02-15T21:12:55.437Z",
    "imageAlt": "generic image with title",
    "imageId": "15b5a800-c5c4-4d72-b9d6-d816af390af8",
    "image": {...},
    "thumbnailAlt": "generic thumbnail with title",
    "thumbnailId": "15b5a800-c5c4-4d72-b9d6-d816af390af8",
    "thumbnail": {...},
    "synopsis": "Kako naći stvari koje nisu na google-u? Nije lako. Priča kreće davne 1389. kada je gospodin Mrnjavčević Marko krenuo u boj...."
  }
}
```

## DELETE BLOG

Izbriši Blog.

**URL** : `/api/v1/blogs/:id`

**Method** : `DELETE`

**Auth required** : YES

**Authorization** : super-admin / blogger

### Request Body Params

none

### Response

**status** `200`

```json
{
  "status": "success"
}
```

## PUBLISH BLOG

Objavi Blog.

**URL** : `/api/v1/blogs/:id/publish`

**Method** : `PATCH`

**Auth required** : YES

**Authorization** : super-admin / blogger

### Request Body Params

published: **boolean** - _required_ <br>

```json
// example body
{
  "published": true
}
```

### Response

**status** `200`

```json
{
  "status": "success",
  "data": {
    "id": "08b1a7ee-65e3-4ba2-b156-48d285e588f8",
    "title": "Kako naći stvari koje nisu na google-u?",
    "published": true,
    "slug": "kako-naći-stvari-koje-nisu-na-google-u",
    "createdAt": "2021-02-15T21:12:55.437Z",
    "imageAlt": "generic image with title",
    "imageId": "15b5a800-c5c4-4d72-b9d6-d816af390af8",
    "image": {...},
    "thumbnailAlt": "generic thumbnail with title",
    "thumbnailId": "15b5a800-c5c4-4d72-b9d6-d816af390af8",
    "thumbnail": {...},
    "synopsis": "Kako naći stvari koje nisu na google-u? Nije lako. Priča kreće davne 1389. kada je gospodin Mrnjavčević Marko krenuo u boj...."
  }
}
```

## CREATE EXPENSE

Dodaj trošak

**URL** : `/api/v1/expenses/`

**Method** : `POST`

**Auth required** : YES

**Authorization** : admin / super-admin

### Request Body Params

description: **string** - _required_ <br>
amount: **number** - _required_ <br>

```json
{
  "description": "Zakup Njegoševa.",
  "amount": 1400
}
```

### Response:

**status** `201

```json
//response object example
{
  "status": "success",
  "data": {
    "description": "Zakup Njegoševa.",
    "amount": 1400,
    "createdAt": "2021-02-19T00:00:00.000Z",
    "id": "b00c8ef4-b59c-4988-8d12-df53b446eb9d",
    "updatedAt": "2021-02-19T16:11:36.289Z"
  }
}
```

## EDIT EXPENSE

Izmeni trošak

**URL** : `/api/v1/expenses/:id`

**Method** : `PATCH`

**Auth required** : YES

**Authorization** : admin / super-admin

### Request Body Params

description: **string** - _optional_ <br>
amount: **number** - _optional_ <br>

```json
{
  "amount": 1500
}
```

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
  "data": {
    "description": "Zakup Njegoševa.",
    "amount": 1500,
    "createdAt": "2021-02-19T00:00:00.000Z",
    "id": "b00c8ef4-b59c-4988-8d12-df53b446eb9d",
    "updatedAt": "2021-02-19T16:11:36.289Z"
  }
}
```

## DELETE EXPENSE

Obriši trošak

**URL** : `/api/v1/expenses/:id`

**Method** : `DELETE`

**Auth required** : YES

**Authorization** : admin / super-admin

### Request Body Params

none

### Response:

**status** `202`

```json
//response object example
{
  "status": "success"
}
```

## GET EXPENSES

Uzmi troškove između datuma.

**URL** : `/api/v1/jobConclusions/`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Query Strings

**fromDate** - datumaOd<br>
**toDate** - datumaDo<br>

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
  "results": 2,
  "data": [
    {
      "id": "00dbc107-27b3-4149-9a60-424f0e9f937b",
      "description": "Business-focused solution-oriented circuit",
      "amount": 185,
      "createdAt": "2021-01-12T00:00:00.000Z",
      "updatedAt": "2021-02-10T20:39:37.157Z"
    },
    {
      "id": "0265556b-744a-45bd-9b01-e68724dcf071",
      "description": "Devolved client-driven function",
      "amount": 78,
      "createdAt": "2021-01-17T00:00:00.000Z",
      "updatedAt": "2021-02-10T20:39:37.069Z"
    }
  ]
}
```

## SIGNUP ADMIN

Registrovanje novog administratora

**URL** : `/api/v1/admin/createAdmin`

**Method** : `POST`

**Auth required** : YES

**Authorization** : admin / super-admin

### Request Body Params

firstName: **string** - _required_ <br>
lastName: **string** - _required_ <br>
username: **string** -_required_<br>
phoneNumber: **string** - _required_ <br>
email: **string** - _required_ <br>
password: **string** - _required_ <br>
passwordConfirm: **string** - _required_ <br>
role: **enum**

role enum options:

- "blogger"
- "mechanic"
- "admin"
- "super-admin"

```json
//Body Example

{
  "firstName": "Dragan",
  "lastName": "Podraščanin",
  "username": "dragan",
  "email": "draganpodrascanin@gmail.com",
  "password": "password",
  "passwordConfirm": "password",
  "phoneNumber": "0631480440",
  "role": "mechanic"
}
```

### Response:

http-only JWT cookie

**status** `201`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "ead19267-bb1e-4696-bf56-ac7b2cf18f78",
    "email": "draganpodrascanin@gmail.com",
    "firstName": "Dragan",
    "lastName": "Podraščanin",
    "phoneNumber": 0631480440,
    "username": "drajadin",
    "passwordResetToken": null,
    "passwordResetExpires": null,
    "passwordChangedAt": null,
    "role": "mechanic",
    "active": true,
    "createdAt": "2021-02-18T18:09:54.652Z",
    "updatedAt": "2021-02-18T18:09:54.652Z"
  }
}
```

## ADMIN LOGIN

Dozvoljava Administratoru da se uloguje. Sa validnim username-om i šifrom.

**URL** : `/api/v1/admin/login`

**Method** : `POST`

**Auth required** : No

### Request Body Params

username: **string** -_required_<br>
password: **string** -_required_<br>

```json
//Body Example
{
  "username": "dragan",
  "password": "password"
}
```

### Response:

http-only JWT cookie

**status** `200`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "ead19267-bb1e-4696-bf56-ac7b2cf18f78",
    "email": "draganpodrascanin@gmail.com",
    "firstName": "Dragan",
    "lastName": "Podraščanin",
    "phoneNumber": 0631480440,
    "username": "drajadin",
    "passwordResetToken": null,
    "passwordResetExpires": null,
    "passwordChangedAt": null,
    "role": "mechanic",
    "active": true,
    "createdAt": "2021-02-18T18:09:54.652Z",
    "updatedAt": "2021-02-18T18:09:54.652Z"
  }
}
```

## ADMIN LOGOUT

**URL** : `/api/v1/admin/logout`

**Method** : `POST`

**Auth required** : No

**Authorization** : None

### Request Body Params

none.

### Response:

empty cookie overwriting JWT

**status** `200`

```json
//response object example
{
  "status": "success"
}
```

## ADMIN FORGOT PASSWORD

Administrator zahtev za email sa URL-om za reset šifre.

**URL** : `/api/v1/admin/forgotPassword`

**Method** : `POST`

**Auth required** : No

**Authorization** : None

### Request Body Params

username: **string** _required_

```json
//body example
{
  "username": "dragan"
}
```

### Response:

email sa URL za reset šifre poslat na email od Administratora sa
datim username-om

**status** `200`

```json
//response object example
{
  "status": "success",
  "message": "Token sent to email!"
}
```

## ADMIN RESET PASSWORD

Promena šifre i prijava.

**URL** : `/api/v1/admin/resetPassword`

**Method** : `PATCH`

**Auth required** : No

**Authorization** : None

### Request Body Params

password: **string** _required_
passwordConfirm: **string** _required_

```json
//body example
{
  "password": "password",
  "passwordConfirm": "password"
}
```

### Response:

http-only JWT cookie

**status** `200`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "ead19267-bb1e-4696-bf56-ac7b2cf18f78",
    "email": "draganpodrascanin@gmail.com",
    "firstName": "Dragan",
    "lastName": "Podraščanin",
    "phoneNumber": 0631480440,
    "username": "drajadin",
    "passwordResetToken": null,
    "passwordResetExpires": null,
    "passwordChangedAt": "2021-02-18T19:00:00.652Z",
    "role": "mechanic",
    "active": true,
    "createdAt": "2021-02-18T18:09:54.652Z",
    "updatedAt": "2021-02-18T18:09:54.652Z"
  }
}
```

## GET CURRENT ADMIN

Preuzmi trenutno ulogovanog Administratora.

**URL** : `/api/v1/admin/currentAdmin`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : None

### Request Body Params

none

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "ead19267-bb1e-4696-bf56-ac7b2cf18f78",
    "email": "draganpodrascanin@gmail.com",
    "firstName": "Dragan",
    "lastName": "Podraščanin",
    "phoneNumber": 0631480440,
    "username": "drajadin",
    "passwordResetToken": null,
    "passwordResetExpires": null,
    "passwordChangedAt": "2021-02-18T19:00:00.652Z",
    "role": "mechanic",
    "active": true,
    "createdAt": "2021-02-18T18:09:54.652Z",
    "updatedAt": "2021-02-18T18:09:54.652Z"
  }
}
```

## CREATE USER

Registrovanje novog korisnika/klijenta

**URL** : `/api/v1/users/`

**Method** : `POST`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

firstName: **string** - _required_ <br>
lastName: **string** - _required_ <br>
phoneNumber: **string** - _required_ <br>
email: **string** - _required_ <br>
password: **string** - _required_ <br>
passwordConfirm: **string** - _required_ <br>

```json
//Body Example

{
  "firstName": "Dragan",
  "lastName": "Podraščanin",
  "email": "draganpodrascanin@gmail.com",
  "password": "password",
  "passwordConfirm": "password",
  "phoneNumber": "0631480440"
}
```

### Response:

**status** `201`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "ead19267-bb1e-4696-bf56-ac7b2cf18f78",
    "email": "draganpodrascanin@gmail.com",
    "firstName": "Dragan",
    "lastName": "Podraščanin",
    "phoneNumber": 0631480440,
    "passwordResetToken": null,
    "passwordResetExpires": null,
    "passwordChangedAt": null,
    "active": true,
    "createdAt": "2021-02-18T18:09:54.652Z",
    "updatedAt": "2021-02-18T18:09:54.652Z"
  }
}
```

## USER LOGIN

Dozvoljava Klijentu da se uloguje. Sa validnim email-om i šifrom. Kako bih pristupio
E-Servisnoj Knjižici.

**URL** : `/api/v1/users/login`

**Method** : `POST`

**Auth required** : No

### Request Body Params

email: **string** -_required_<br>
password: **string** -_required_<br>

```json
//Body Example
{
  "username": "dragan",
  "password": "password"
}
```

### Response:

http-only JWT cookie

**status** `200`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "ead19267-bb1e-4696-bf56-ac7b2cf18f78",
    "email": "draganpodrascanin@gmail.com",
    "firstName": "Dragan",
    "lastName": "Podraščanin",
    "phoneNumber": 0631480440,
    "passwordResetToken": null,
    "passwordResetExpires": null,
    "passwordChangedAt": null,
    "active": true,
    "createdAt": "2021-02-18T18:09:54.652Z",
    "updatedAt": "2021-02-18T18:09:54.652Z"
  }
}
```

## USER FORGOT PASSWORD

User zahtev za email sa URL-om za reset šifre.

**URL** : `/api/v1/users/forgotPassword`

**Method** : `POST`

**Auth required** : No

**Authorization** : None

### Request Body Params

email: **string** _required_

```json
//body example
{
  "email": "draganpodrascanin@gmail.com"
}
```

### Response:

email sa URL za reset šifre poslat na email od klijenta.

**status** `200`

```json
//response object example
{
  "status": "success",
  "message": "Token sent to email!"
}
```

## USER RESET PASSWORD

Promena šifre klijenta.

**URL** : `/api/v1/users/resetPassword`

**Method** : `PATCH`

**Auth required** : No

**Authorization** : None

### Request Body Params

password: **string** _required_
passwordConfirm: **string** _required_

```json
//body example
{
  "password": "password",
  "passwordConfirm": "password"
}
```

### Response:

http-only JWT cookie

**status** `200`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "ead19267-bb1e-4696-bf56-ac7b2cf18f78",
    "email": "draganpodrascanin@gmail.com",
    "firstName": "Dragan",
    "lastName": "Podraščanin",
    "phoneNumber": 0631480440,
    "passwordResetToken": null,
    "passwordResetExpires": null,
    "passwordChangedAt": "2021-02-18T19:00:00.652Z",
    "active": true,
    "createdAt": "2021-02-18T18:09:54.652Z",
    "updatedAt": "2021-02-18T18:09:54.652Z"
  }
}
```

## GET USER

Zahtev za jednog User-a

**URL** : `/api/v1/users/:id`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Response:

**status** `200`

```json
//response object example
{
  "status": "success",
  "data": {
    "id": "ead19267-bb1e-4696-bf56-ac7b2cf18f78",
    "email": "draganpodrascanin@gmail.com",
    "firstName": "Dragan",
    "lastName": "Podraščanin",
    "phoneNumber": 0631480440,
    "passwordResetToken": null,
    "passwordResetExpires": null,
    "passwordChangedAt": "2021-02-18T19:00:00.652Z",
    "active": true,
    "createdAt": "2021-02-18T18:09:54.652Z",
    "updatedAt": "2021-02-18T18:09:54.652Z"
  }
}
```

## GET USERS

Zahtev za Usere

**URL** : `/api/v1/users/`

**Method** : `GET`

**Auth required** : Yes

**Authorization** : mechanic / admin / super-admin

### Request Body Params

none

### Query Strings

**page** - broj stranice<br>
**limit** - ograniči broj user-a po stranici<br>
**search** - filtriraj gde se search sadrži u _name_, _email_ ili _phoneNumber_ usera

### Response:

**status** `200`

```json
//response object example
{
    "status": "success",
    "results": 2,
    "count": 100,
    "data": [
        {
            "id": "1162e0ed-9b2a-4dd6-bbbb-569c3dffe563",
            "firstName": "Maya",
            "lastName": "Rice",
            "email": "Corbin.Ernser@yahoo.com",
            "phoneNumber": "+38662358372",
            "active": true,
            "createdAt": "2020-12-02T20:14:50.008Z",
            "updatedAt": "2020-12-02T20:14:50.153Z",
            "cars": [...]
        },
        {
            "id": "123d37af-e5c4-4fbb-b754-6ae5791ac1ed",
            "firstName": "Clarissa",
            "lastName": "Leuschke",
            "email": "Imelda_Gutkowski@yahoo.com",
            "phoneNumber": "+38655299269",
            "active": true,
            "createdAt": "2020-12-02T20:14:50.008Z",
            "updatedAt": "2020-12-02T20:14:50.153Z",
            "cars": [...]
        }
    ]
}
```

## CREATE MESSAGE

Pošalji poruku.

**URL** : `/api/v1/messages/`

**Method** : `POST`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

name: **string** - _required_ <br>
car: **string** - _optional_ <br>
email: **string** - _optional_ <br>
phone: **string** - _required_ <br>
engine: **string** - _optional_ <br>
message: **string** - _required_ <br>

```json
//Body Example

{
  "name": "Petar Petrović",
  "car": "Fiat Punto 2012.",
  "email": "petar@petrović.com",
  "phone": "0631480440",
  "message": "Poruku šaljem"
}
```

### Response:

**status** `201`

```json
//response object example
{
  "status": "success",
  "data": {
    "name": "Petar Petrović",
    "phone": "0631480440",
    "email": "petar@petrović.com",
    "car": "Fiat Punto, 2012.",
    "message": "Poruku šaljem",
    "id": "c50e9bcb-f036-4e9e-80ad-ff342f49259a",
    "seen": false,
    "createdAt": "2021-02-19T16:32:21.887Z"
  }
}
```

## EDIT MESSAGE \*SEEN

Seenuj poruku.

**URL** : `/api/v1/messages/:id`

**Method** : `PATCH`

**Auth required** : YES

**Authorization** : admin / super-admin / mechanic

### Request Body Params

seen: **boolean**

```json
//Body Example

{
  "seen": true
}
```

### Response

**status** `200`

```json
//Response Body Example
{
  "status": "success",
  "data": {
    "name": "Petar Petrović",
    "phone": "0631480440",
    "email": "petar@petrović.com",
    "car": "Fiat Punto, 2012.",
    "message": "Poruku šaljem",
    "id": "c50e9bcb-f036-4e9e-80ad-ff342f49259a",
    "seen": true,
    "createdAt": "2021-02-19T16:32:21.887Z"
  }
}
```
