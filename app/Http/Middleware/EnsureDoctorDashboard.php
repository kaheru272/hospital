<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnsureDoctorDashboard
{
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();
        if ($user && $user->role === 'Doctor') {
            if (!$request->is('Dashboard/DoctorDashboard*')) {
                return redirect('/Dashboard/DoctorDashboard');
            }
        }
        return $next($request);
    }
}
