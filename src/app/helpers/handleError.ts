import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

export const handleError = <T>(result?: T) => {
  return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    return of(result as T);
  };
};
