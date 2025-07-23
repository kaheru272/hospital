<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnsureAdminDashboard
{
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();
        if ($user && $user->role === 'Admin') {
            if (!$request->is('Dashboard/AdminDasboard*')) {
                return redirect('/Dashboard/AdminDashboard');
            }
        }
        return $next($request);
    }
}
