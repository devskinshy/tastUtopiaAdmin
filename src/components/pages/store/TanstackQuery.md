# 🔍 TanStack Query Guide

## 📝 개요

`TanStack Query`는 서버 상태를 관리하고, 데이터를 가져오거나 변이를 처리하는 데 사용하는 라이브러리입니다. 이 문서에서는 `useQuery`와 `useMutation`의 주요 옵션들을 테이블 형식으로 정리하여 설명합니다.

<br /><br /><br /><br />

## 🎯 `useQuery` Options

`useQuery`는 서버에서 데이터를 가져오고, 캐싱하며, 로컬에서 해당 데이터를 효율적으로 관리하는 훅입니다. 아래는 `useQuery`에서 사용할 수 있는 주요 옵션들입니다.

| **Option**              | **Type**           | **Default** | **Description**                                                                                                         |
|-------------------------|--------------------|-------------|-------------------------------------------------------------------------------------------------------------------------|
| `queryKey`              | `Array` or `string`| _Required_  | 고유하게 쿼리를 식별하는 키. 캐시에서 데이터를 구분하는 데 사용됩니다.                                                 |
| `queryFn`               | `Function`         | _Required_  | 데이터를 가져오는 비동기 함수입니다. 주로 API 호출에 사용됩니다.                                                         |
| `initialData`           | `any`              | `undefined` | 쿼리가 성공하기 전에 사용할 초기 데이터를 설정합니다.                                                                   |
| `staleTime`             | `number`           | `0`         | 데이터가 "stale(오래됨)" 상태로 간주되기까지의 시간(밀리초)입니다. 이 시간 동안은 리패칭을 하지 않습니다.                 |
| `cacheTime`             | `number`           | `300000`    | 데이터가 캐시에 유지되는 시간(밀리초)입니다. 이 시간이 지나면 데이터가 캐시에서 삭제됩니다.                              |
| `refetchOnWindowFocus`  | `boolean`          | `true`      | 창 포커스 시 데이터를 자동으로 리패칭할지 여부입니다. `false`로 설정하면 리패칭하지 않습니다.                            |
| `refetchOnReconnect`    | `boolean`          | `true`      | 네트워크가 다시 연결될 때 데이터를 리패칭할지 여부를 설정합니다.                                                         |
| `refetchOnMount`        | `boolean`          | `true`      | 컴포넌트가 마운트될 때마다 리패칭할지 여부입니다. `false`로 설정하면 마운트 시 리패칭하지 않습니다.                      |
| `retry`                 | `number`           | `3`         | 실패한 쿼리를 자동으로 재시도할 횟수입니다. `0`으로 설정하면 재시도하지 않습니다.                                        |
| `retryDelay`            | `Function`         | `default`   | 재시도 간 지연 시간. 재시도 간의 시간 지연을 계산하는 함수입니다.                                                        |
| `enabled`               | `boolean`          | `true`      | 쿼리 실행을 활성화하거나 비활성화할 수 있습니다. `false`로 설정하면 쿼리가 실행되지 않습니다.                            |
| `keepPreviousData`      | `boolean`          | `false`     | 쿼리가 새로운 데이터를 가져오는 동안 이전 데이터를 유지할지 여부입니다.                                                 |
| `refetchInterval`       | `number` or `false`| `false`     | 자동으로 데이터를 주기적으로 리패칭하는 주기(밀리초)입니다. `false`로 설정하면 비활성화됩니다.                            |
| `refetchIntervalInBackground`| `boolean`     | `false`     | 페이지가 백그라운드에 있어도 `refetchInterval`을 사용할지 여부를 설정합니다.                                             |
| `suspense`              | `boolean`          | `false`     | `React Suspense`를 사용할지 여부입니다. `true`로 설정하면 `Suspense`와 함께 쿼리를 사용할 수 있습니다.                   |
| `onSuccess`             | `Function`         | `undefined` | 쿼리가 성공했을 때 호출되는 콜백 함수입니다.                                                                            |
| `onError`               | `Function`         | `undefined` | 쿼리가 실패했을 때 호출되는 콜백 함수입니다.                                                                            |
| `onSettled`             | `Function`         | `undefined` | 쿼리가 성공하거나 실패했을 때 호출되는 콜백 함수입니다.                                                                 |

<br /><br /><br /><br />

## 🎯 `useMutation` Options

`useMutation`은 데이터를 서버에 전송하거나 업데이트할 때 사용하는 훅입니다. 주로 POST, PUT, DELETE 같은 요청에서 사용됩니다.

| **Option**     | **Type**           | **Default**  | **Description**                                                                                                          |
|----------------|--------------------|--------------|--------------------------------------------------------------------------------------------------------------------------|
| `mutationFn`   | `Function`         | _Required_   | 서버에 데이터를 전송하거나 수정하는 비동기 함수입니다. 주로 POST, PUT, DELETE 요청에서 사용됩니다.                         |
| `onSuccess`    | `Function`         | `undefined`  | 변이가 성공했을 때 호출되는 콜백 함수입니다. 주로 성공 후에 데이터를 리패칭하는 데 사용됩니다.                           |
| `onError`      | `Function`         | `undefined`  | 변이가 실패했을 때 호출되는 콜백 함수입니다.                                                                              |
| `onSettled`    | `Function`         | `undefined`  | 변이가 성공하거나 실패했을 때 상관없이 호출되는 콜백 함수입니다.                                                         |
| `retry`        | `number`           | `3`          | 변이가 실패했을 때 자동으로 재시도할 횟수입니다.                                                                          |
| `retryDelay`   | `Function`         | `default`    | 변이가 실패했을 때 재시도 간의 지연 시간을 설정하는 함수입니다.                                                           |
| `mutationKey`  | `string` or `Array`| `undefined`  | 변이를 고유하게 식별하는 키입니다. 캐시된 데이터를 구분하는 데 사용됩니다.                                                |

---

<br />