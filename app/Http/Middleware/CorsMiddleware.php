<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CorsMiddleware {
    /**
    * Handle an incoming request.
    *
    * @param  \Closure( \Illuminate\Http\Request ): ( \Symfony\Component\HttpFoundation\Response )  $next
    */

    public function handle( Request $request, Closure $next ): Response {
        // Handle preflight requests
        if ( $request->isMethod( 'OPTIONS' ) ) {
            $response = response( '', 200 );
        } else {
            $response = $next( $request );
        }

        // Add CORS headers
        $response->headers->set( 'Access-Control-Allow-Origin', '*' );
        // Allow all origins ( or specify your frontend domain, e.g., 'https://tawridco.com' )
        $response->headers->set( 'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS' );
        // Allowed methods
        $response->headers->set( 'Access-Control-Allow-Headers', 'Content-Type, Authorization, x-access-key' );
        // Allow 'x-access-key' header
        $response->headers->set( 'Access-Control-Allow-Credentials', 'true' );
        // If you need credentials ( cookies, authorization headers )

        return $response;
    }
}
