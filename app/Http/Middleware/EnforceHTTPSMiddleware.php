<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnforceHTTPSMiddleware {
    /**
    * Handle an incoming request.
    *
    * @param  \Closure( \Illuminate\Http\Request ): ( \Symfony\Component\HttpFoundation\Response )  $next
    */

    public function handle( Request $request, Closure $next ): Response {
        if ( str_starts_with( config( 'app.url' ), 'https://' ) ) {
            $request->server->set( 'HTTPS', 'on' );
        }
        return $next( $request );
    }
}
