<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnsureNurseDashboard
{
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();
        if ($user && $user->role === 'Nurse') {
            if (!$request->is('Dashboard/NurseDashboard*')) {
                return redirect('/Dashboard/NurseDashboard');
            }
        }
        return $next($request);
    }
}